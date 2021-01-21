
import React from "react";

function Signup(){
    const signUpForm = $("#signup-form");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");
    const clearanceInput = $("input#clearance-input");
  
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", event => {
      event.preventDefault();
      const userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
        clearance: clearanceInput.val().trim()
      };
  
      if (!userData.email || !userData.password || !userData.clearance) {
        return;
      }
  
      // If we have an email and password, run the signUpUser function
      signUpUser(userData.email, userData.password, userData.clearance);
      emailInput.val("");
      passwordInput.val("");
      clearanceInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password, clearance) {
      $.post("/api/signup", {
        email: email,
        password: password,
        clearance: clearance
      })
        .then(() => {
          window.location.replace("/members");
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }

return(
    <form id="signup-form">

    <div class="form-group">
      <label for="email">Email Address</label>
      <input type="text" class="form-control" id="email-input" required />
    </div>
    <div class="form-group">
      <label for="Password">Password</label>
      <input type="password" 
      class="form-control" 
      id="password-input" 
      required value={this.state.value} 
      onChange={this.handleChange}/>
    </div>

    <div class="form-group">
      <label for="clearance">Clearance level</label>
      <input type="text" 
      class="form-control" 
      id="clearance-input" 
      required value={this.state.value} 
      onChange={this.handleChange}/>
      <br />
    </div>

    <div class="form-group">
      <button type="submit" id="signUp" class="button is-light">Sign Up</button>
    </div>
    <br />
    <div>
      <p class="subtitle">Already have an Account?</p>
      <a class="button is-light" href="/login">Log In</a>
    </div>

  </form>
)};

export default Signup;

