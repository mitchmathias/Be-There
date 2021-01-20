import React from 'react';
import { Link } from "react-router-dom";
import '../../style.css'

function Nav (props) {
    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/"></Link>
            <div>
                <ul className="navbar-nav">
                    
                    <li className="nav-item">
                        <Link onClick={props.SetAboutTab} className={"nav-link active nav-link"}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={props.SetProjectsTab} className={"nav-link active nav-link"}>Signup</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Nav 