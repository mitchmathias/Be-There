import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import './style.css'

const LandingNav = () => {
    return (
        <Container>
            <Box component="span" m={1}>
                <div className="row d-flex justify-content-center">
                    <Card>
                        <div className="card-body">
                            <nav className="navbar navbar-expand">
                                <div className="navbar-nav mr-auto">
                                    <div className="navbar-nav col-mr-auto">
                                        <div className="nav-item">
                                            <NavLink className="nav-link active nav-link" to='/login' exact><h4>Login</h4></NavLink>
                                        </div>
                                    </div>
                                    <div className="navbar-nav ml-auto">
                                        <div className="nav-item">
                                            <NavLink className="nav-link active nav-link" to='/signup' exact ><h4>Signup</h4></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </Card>
                </div>
            </Box>
        </Container>
    )
};

export default LandingNav

