import React from 'react';

const MyProfile = () => {
    axios.get('/:id', {
        params: {
          id: `${id}`
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