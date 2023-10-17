import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import { Svgs } from './svgs';

interface User {
  user: {
    avatar_url: string,
    login: string,
    followers: string,
    following: string,
    email: string,
    bio: string,
  }
}

function UserDetails({ user }: User) {
  return (
    <Row className='my-3 pt-md-3 mx-1 rounded-3 background-500' style={{position: "relative"}}>
      <Col sm={4} md={3} className='py-3 d-flex justify-content-center'>
        <Image width={160} src={user?.avatar_url} alt={user?.login} roundedCircle />
      </Col>
      <Col sm={8} md={9} className='d-flex flex-column justify-content-center align-items-center align-items-sm-start'>
        <h2 className='normalize-text-color'>User Details</h2>
        <p className='normalize-text-color'>Followers: {user?.followers} | Following: {user?.following}</p>
        <p className='normalize-text-color'>Email: {user?.email}</p>
        <p className='normalize-text-color'>Bio: {user?.bio}</p>
      </Col>
      <Svgs type="content" />
    </Row>
  );
}

export default UserDetails;