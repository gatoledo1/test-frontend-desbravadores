import { Route, Routes, useNavigate } from 'react-router-dom';
import UserSearch from './components/userSearch';
import RepoDetails from './components/repoDetails';
import UserPage from './pages/user';
import { Svgs } from './components/svgs';

function App() {

  const navigate = useNavigate();

  const handleUserSearch = async (username: string) => {
    navigate(`/user/${username}`);
  };

  return (
    <div className="App">
      <Svgs type="header" />
      <Routes>
        <Route
          path="/"
          element={<UserSearch onSearch={handleUserSearch} />}
        />
        <Route
          path="/user/:username"
          element={
            <UserPage />
          }
        />
        <Route path="/repo/:owner/:repoName" element={<RepoDetails />} />
      </Routes>
      <Svgs type="footer" />
    </div>
  );
}

export default App;