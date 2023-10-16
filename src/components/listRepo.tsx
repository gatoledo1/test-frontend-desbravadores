import React, { useState } from "react";

function RepoList({ repos, onRepoClick }) {
  const [sortBy, setSortBy] = useState("stars");

  const sortOptions = {
    stars: (a: { stargazers_count: number }, b: { stargazers_count: number }) => b.stargazers_count - a.stargazers_count,
    starsAsc: (a: { stargazers_count: number }, b: { stargazers_count: number }) => a.stargazers_count - b.stargazers_count,
    alphabetical: (a: { name: string }, b: { name: any }) => a.name.localeCompare(b.name),
    recent: (a: { updated_at: string | Date }, b: { updated_at: string | Date }) =>
      Number(new Date(b.updated_at)) - Number(new Date(a.updated_at)),
    oldest: (a: { updated_at: string | Date }, b: { updated_at: string | Date }) =>
      Number(new Date(a.updated_at)) - Number(new Date(b.updated_at)),
  };

  const sortRepos = (repos: any, sortBy: string) => [...repos].sort(sortOptions[sortBy] || ((a, b) => 0));

  const sortedRepos = sortRepos(repos, sortBy);

  return (
    <div>
      <div>
        <label htmlFor="sortSelect">Sort By:</label>
        <select id="sortSelect" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="stars">Most Stars</option>
          <option value="starsAsc">Least Stars</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="recent">Most Recent</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <h2>Repository List</h2>
      <ul>
        {sortedRepos.map((repo) => (
          <li key={repo.id} onClick={() => onRepoClick(repo)}>
            {repo.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepoList;
