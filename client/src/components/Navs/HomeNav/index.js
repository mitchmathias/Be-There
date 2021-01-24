import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import './style.css'
import Typography from '@material-ui/core/Typography'

const HomeNav = () => {
    return (
        <Router>
        <Typography className="navbar sticky-top navbar-expand navbar-dark bg-dark">
                <div className="navbar-nav mr-auto">
                    <div className="nav-item">
                        <NavLink  to='/events' exact className="nav-link active nav-link"><h5>Opportunities Near You</h5> </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink  to='/planEvents' exact className="nav-link active nav-link"><h5>Plan an Event</h5></NavLink>
                    </div>

                </div>
                <div className="navbar-nav ml-auto">
                    <div className="nav-item">
                        <NavLink  to='/myProfile' exact className="nav-link active nav-link"><h5>My Profile</h5> </NavLink>
                    </div>
                </div>
        </Typography>
        </Router>
    )
};

export default HomeNav 