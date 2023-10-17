import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import UserDetails from '../components/userDetails';
import RepoList from '../components/listRepo';
import { useParams } from 'react-router-dom';
import { getUserDetails, getUserRepos } from '../services/github';
import { GoTo } from '../components/goTo';
import { Loader } from '../components/loader';

function UserPage() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleUserSearch = async (username: string) => {
    const userData = await getUserDetails(username);
    const userRepos = await getUserRepos(username);
    setRepos(userRepos);
    setUser(userData);
  };
  
  useEffect(() => {
    if(username) {
      handleUserSearch(username);
    }

  }, [username]);


  return (
    <Container fluid="lg">
        {
          user ? (
            <>
              <GoTo />
              <UserDetails user={user} />
              {repos.length > 0 && (<RepoList repos={repos} />)}
            </>
          ) : (      
            <Loader />
          )
        }
    </Container>
  );
}

export default UserPage;