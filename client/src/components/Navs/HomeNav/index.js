import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

function HomeNav(props) {
    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-nav mr-auto">
                    <div className="nav-item">
                        <Link onClick={props.SetOppsTab} className={"nav-link active nav-link"}><h5>Opportunities Near You</h5> </Link>
                    </div>
                    <div className="nav-item">
                        <Link onClick={props.SetEventsTab} className={"nav-link active nav-link"}><h5>Create an Event</h5></Link>
                    </div>

                </div>
                <div className="navbar-nav ml-auto">
                    <div className="nav-item">
                        <Link onClick={props.SetProfileTab} className={"nav-link active nav-link"}><h5>My Profile</h5> </Link>
                    </div>
                </div>
        </nav>
        
    )
};

export default HomeNav 