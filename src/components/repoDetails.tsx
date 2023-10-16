import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRepoDetails } from '../services/github';

function RepoDetails({ repo }) {
  const { owner, repoName } = useParams();
  const [repoDetails, setRepoDetails] = useState(repo);

  useEffect(() => {
    const fetchRepos = async () => {
      const repoData = await getRepoDetails(`${owner}/${repoName}`);
      setRepoDetails(repoData);
    };
    
    if(!repo) {
      fetchRepos();
    }
  }, [owner, repoName, repo]);

  return (
    repoDetails ? (
      <div>
        <h2>Repository Details</h2>
        <p>Name: {repoDetails.name}</p>
        <p>Description: {repoDetails.description}</p>
        <p>Stars: {repoDetails.stargazers_count}</p>
        <p>Language: {repoDetails.language}</p>
        <a href={repoDetails.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    ) : (
      <div>
        <h2>Houve um erro ao procurar pelo repositório, verificaremos em breve</h2>
      </div>
    )
  );
}

export default RepoDetails;