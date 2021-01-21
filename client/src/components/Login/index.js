import React from "react";

function Login() {
    module.exports = {
        login: (req, res) => {
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then(async function (userData) {
                if (!userData) {
                    res.send({ user: false, message: "Incorrect user email" });
                    return
                }
                if (await brcrypt.compare(req.body.password, userData.password)) {
                    res.send({ user: userData.id, message: "Welcome" })
                } else {
                    res.send({ user: false, message: "Incorrect password" });
                }
            }).catch(err => {
                res.sent(err);
                console.log(err)
            })
        }
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setSearch(value);
      };
    
      handleFormSubmit = (event) => {
        event.preventDefault();
        API.search(search)
        .then(res=>setResults(res.items))
        .catch(err=>console.log(err));
      }


    return (
        <form id="login-form" className="needs-validation" novalidate onSubmit={this.loginUser}>
            <div className="form-group">
                <label for="email">E-mail Address</label>
                <input type="text"
                    className="form-control"
                    id="email-input"
                    required value={this.state.value}
                    onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
                <label for="Password">Password </label>
                <input type="password"
                    className="form-control"
                    id="password-input"
                    required value={this.state.value}
                    onChange={this.handleInputChange} />
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

    )
};

export default Login;

