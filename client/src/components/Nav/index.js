import React from 'react';
import { Link } from "react-router-dom";
import '../../style.css'

function Nav(props) {
    return (

        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
            <div className="navbar-nav mr-auto">
                <div className="nav-item">
                    <Link onClick={props.SetOppsTab} className={"nav-link active nav-link"}>Opportunities Near You</Link>
                </div>
                <div className="nav-item">
                    <Link onClick={props.SetEventsTab} className={"nav-link active nav-link"}>Create an Event</Link>
                </div>
                
            </div>
            <div className="navbar-nav ml-auto">
                
                <div className="nav-item">
                    <Link onClick={props.SetLoginTab} className={"nav-link active nav-link"}>Login</Link>
                </div>
                <div className="nav-item">
                    <Link onClick={props.SetSignupTab} className={"nav-link active nav-link"}>Signup</Link>
                </div>
            </div>
        </nav>

    )
};

export default Nav 