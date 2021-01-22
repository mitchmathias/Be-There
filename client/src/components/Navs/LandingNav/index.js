import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

function Nav(props) {
    return (
        <div className="row signup d-flex justify-content-center">
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        <div className="navbar-nav mr-auto">
                            <div className="nav-item">
                                <Link onClick={props.SetLoginTab} className={"nav-link active nav-link"}><h5>Login</h5></Link>
                            </div>
                            <div className="nav-item">
                                <Link onClick={props.SetSignupTab} className={"nav-link active nav-link"}><h5>Signup</h5></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Nav 