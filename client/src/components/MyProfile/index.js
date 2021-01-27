import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import Wrapper from '../Wrapper'
import Jumbotron from '../Jumbotron';
import HomeNav from '../Navs/HomeNav'
const MyProfile = () => {
  const [user, setUser] = useState({})
  useState(() => {
    axios.get('/api/users/me').then((response) => {
      console.log(response);
      setUser(response.data)

    })
      .catch((error) => {
        console.log("submit error: ");
        console.log(error);
      });
  })

  return (
    <Wrapper>
    <Jumbotron />
    < HomeNav />
    <Container>
      <Box>
        <div className="row d-flex justify-content-center m-3">
          <Card>
            <div className="card-body">
              <h3 className="card-title">{user.firstName} {user.lastName} </h3>
              <p>Email address: {user.email}</p>
              <p>First name: {user.firstName}</p>
              <p>Last name: {user.lastName}</p>
              <p>Location: {user.location}</p>
            </div>
          </Card>
        </div>
      </Box>
    </Container >
    </Wrapper>
  )
};

export default MyProfile
