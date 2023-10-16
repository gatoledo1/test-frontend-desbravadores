import React from 'react';

function UserDetails({ user }) {
  return (
    <div>
      <h2>User Details</h2>
      <img src={user?.avatar_url} alt={user?.login} />
      <p>Followers: {user?.followers}</p>
      <p>Following: {user?.following}</p>
      <p>Email: {user?.email}</p>
      <p>Bio: {user?.bio}</p>
    </div>
  );
}

export default UserDetails;