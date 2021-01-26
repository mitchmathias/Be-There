import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MyProfile = () => {
    const [user, setUser]= useState({})
    useEffect(()=>{
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
        
        <div class="container">
            <h3>{user.username}</h3>
            <br />
            <p>Email address: {user.email}</p>
            <br />
            <p>First name: {user.firstName}</p>
            <br />
            <p>Last name: {user.lastName}</p>
            <br />
            <p>Location: {user.location}</p>
            <br />
        </div>
    )
};

export default MyProfile