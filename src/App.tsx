import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserSearch from './components/userSearch';
import UserDetails from './components/userDetails';
import RepoList from './components/listRepo';
import RepoDetails from './components/repoDetails';
import { getUserDetails, getUserRepos, getRepoDetails } from './services/github';

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [repoDetails, setRepoDetails] = useState(null);

  const navigate = useNavigate();

  const handleUserSearch = async (username) => {
    const userData = await getUserDetails(username);
    setUser(userData);
    const userRepos = await getUserRepos(username);
    setRepos(userRepos);
  };

  const handleRepoClick = async (repo) => {
    const repoData = await getRepoDetails(`${repo.owner.login}/${repo.name}`);
    setRepoDetails(repoData);
    navigate(`/repo/${repo.owner.login}/${repo.name}`);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <UserSearch onSearch={handleUserSearch} />
              {user && <UserDetails user={user} />}
              {repos.length > 0 && <RepoList repos={repos} onRepoClick={handleRepoClick} />}
            </>
          }
        />
        {/* <Route
          path="/user/:username"
          element={
            <>
              <UserDetails user={user} />
              <RepoList repos={repos} onRepoClick={handleRepoClick} />
            </>
          }
        /> */}
        <Route path="/repo/:owner/:repoName" element={<RepoDetails repo={repoDetails} />} />
      </Routes>
    </div>
  );
}

export default App;