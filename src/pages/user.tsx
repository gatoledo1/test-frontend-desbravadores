import React, { Suspense, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import UserDetails from "../components/userDetails";
import RepoList from "../components/listRepo";
import { useParams } from "react-router-dom";
import { getUserDetails, getUserRepos } from "../services/github";
import { GoTo } from "../components/goTo";
import { Loader } from "../components/loader";
import EmptySearch from "../components/emptySearch";

function UserPage() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [empty, setEmpty] = useState(null);

  const handleUserSearch = async (username: string) => {
    try {
      const userData = await getUserDetails(username);
      setUser(userData);
    } catch (error) {
      if (error.response.status === 404) {
        setEmpty(true);
      }
    }
    const userRepos = await getUserRepos(username);
    setRepos(userRepos);
  };

  useEffect(() => {
    if (username) {
      handleUserSearch(username);
    }
  }, [username]);

  return (
    <Container fluid="lg">
      {user && !empty ? (
        <>
          <GoTo />
          <UserDetails user={user} />
          {repos.length > 0 && <RepoList repos={repos} />}
        </>
      ) : !user && empty ? (
        <EmptySearch />
      ) : (
        !user && !empty && <Loader />
      )}
    </Container>
  );
}

export default UserPage;
