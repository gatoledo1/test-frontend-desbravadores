import React, { useState } from 'react';
import { X, MagnifyingGlass } from "phosphor-react";
import "../style/input.css";
import { Container, Row } from 'react-bootstrap';

interface UserSearchProps {
  onSearch: (username: string) => void; // Declare a prop 'onSearch'
};

function UserSearch({ onSearch }: UserSearchProps) {
  const [username, setUsername] = useState('');
  const [open, setOpen] = useState(false);

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    onSearch(username);
  };

  return (
    <Container fluid="md" className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <Row>
        <h2 className='normalize-text-color text-center'>Buscar usuário do GitHub</h2>
        <form onSubmit={handleSearch} className='my-4 d-flex justify-content-center'>
          <div className={`input-box  ${open ? "open" : ""}`} >
            <input 
              type="text" 
              placeholder=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="search"
            />
            <span className="icon" onClick={() => {
              setOpen(true)
            }}>
              <MagnifyingGlass className="search-icon" size={32}></MagnifyingGlass>
            </span>
            <div className="close-icon">
              <X onClick={() => { setOpen(false) }}></X>
            </div>
          </div>
        </form>
      </Row>
    </Container>
  );
}

export default UserSearch;