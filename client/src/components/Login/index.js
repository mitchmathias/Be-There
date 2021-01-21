
import React from "react";

function Login(){
    // const loginForm = $("#login-form");
    // const emailInput = $("input#email-input");
    // const passwordInput = $("input#password-input");
  
    // // When the form is submitted, we validate there's an email and password entered
    // loginForm.on("submit", event => {
    //   event.preventDefault();
    //   const userData = {
    //     email: emailInput.val().trim(),
    //     password: passwordInput.val().trim()
    //   };
  
    //   if (!userData.email || !userData.password) {
    //     return;
    //   }
  
    //   // If we have an email and password we run the loginUser function and clear the form
    //   loginUser(userData.email, userData.password);
    //   emailInput.val("");
    //   passwordInput.val("");
    // });
  
    // // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    // function loginUser(email, password) {
    //   $.post("/api/login", {
    //     email: email,
    //     password: password
    //   })
    //     .then(() => {
    //       window.location.replace("/search");
    //       // If there's an error, log the error
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }


    return(
      <form id="login-form" className="needs-validation" novalidate onSubmit={this.loginUser}>
        <div className="form-group">
          <label for="email">E-mail Address</label>
          <input type="text" 
          className="form-control" 
          id="email-input" 
          required value={this.state.value} 
          onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label for="Password">Password </label>
          <input type="password" 
          className="form-control" 
          id="password-input" 
          required value={this.state.value} 
          onChange={this.handleChange} />
          <div id="alert"></div>
        </div>
        <div className="form-group">
          <button type="submit" className="button is-light" id="logInBtn">Log In</button>
        </div>
        <br />
        <div>
          <p className="subtitle">Don't have an Account yet?</p>
          <a className="button is-light" href="/signup">Sign Up</a>
        </div>
      </form>

    )};

export default Login;

