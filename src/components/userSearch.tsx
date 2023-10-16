import React, { useState } from 'react';

interface UserSearchProps {
  onSearch: (username: string) => void; // Declare a prop 'onSearch'
};

function UserSearch({ onSearch }: UserSearchProps) {
  const [username, setUsername] = useState('');

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    onSearch(username);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search GitHub User"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default UserSearch;