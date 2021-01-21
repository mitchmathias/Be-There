
import React from "react";

function Signup() {
    const db = require("../../../../models");
    const bcrypt = require("bcrypt");

    module.exports = {
        register: async function (req, res) {
            try {
                const hashPass = await bcrypt.hash(req.body.password, 8)
                db.User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hashPass
                }).then(userData => {
                    res.send({ user: userData.id, message: "Welcome!" })
                })
            } catch (err) {
                res.send(err)
            }
        }
    }

    return (
        <form id="signup-form">

            <div className="form-group">
                <label for="email">Email Address</label>
                <input type="text" className="form-control" id="email-input" required />
            </div>
            <div className="form-group">
                <label for="Password">Password</label>
                <input type="password"
                    className="form-control"
                    id="password-input"
                    required value={this.state.value}
                    onChange={this.handleChange} />
            </div>

            <div className="form-group">
                <label for="clearance">Clearance level</label>
                <input type="text"
                    className="form-control"
                    id="clearance-input"
                    required value={this.state.value}
                    onChange={this.handleChange} />
                <br />
            </div>

            <div className="form-group">
                <button type="submit" id="signUp" className="button is-light">Sign Up</button>
            </div>
            <br />
            <div>
                <p className="subtitle">Already have an Account?</p>
                <a className="button is-light" href="/login">Log In</a>
            </div>

        </form>
    )
};

export default Signup;

