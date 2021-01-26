import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import LandingNav from '../Navs/LandingNav';
import Footer from '../Footer';
import Wrapper from '../Wrapper';

const MyProfile = () => {
    axios.get('/:id', {
        params: {
          id: this.state.id
        }
        }).then((response) => {
          console.log(response);
          if (!response.data.errmsg) {
            console.log("successful submit");
            // this.setState({
            //   redirectTo: "/events"
            // });
          }
        })
        .catch((error) => {
          console.log("submit error: ");
          console.log(error);
        });

    return (
        
        <div class="container">
            <h3>{this.state.username}</h3>
            <br />
            <p>Email address: {this.state.email}</p>
            <br />
            <p>First name: {this.state.firstName}</p>
            <br />
            <p>Last name: {this.state.lastName}</p>
            <br />
            <p>Location: {this.state.location}</p>
            <br />
        </div>
    )
}

export default MyProfile