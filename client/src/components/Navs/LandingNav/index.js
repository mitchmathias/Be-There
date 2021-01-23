import React from 'react';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import Signup from '../../Signup'
import './style.css'

function LandingNav(props) {
    return (
        <Container>
            <Box component="span" m={1}>
                <div className="row d-flex justify-content-center">
                    <Card>
                        <div className="card-body">
                            <div className="card-body ">
                        <nav className="navbar navbar-expand">
                            <div className="navbar-nav mr-auto">
                                <div className="navbar-nav col-mr-auto">
                                    <div className="nav-item">
                                        <Link onClick={props.SetLoginTab} className={"nav-link active nav-link"}><h4>Login</h4></Link>
                                    </div>
                                    </div>
                                    <div className="navbar-nav ml-auto">
                                    <div className="nav-item">
                                        <Link onClick={props.SetSignupTab} className={"nav-link active nav-link"}><h4>Signup</h4></Link>
                                    </div>
                                    </div>
                                </div>
                        </nav>
                            </div>
                        </div>
                    </Card>
                </div>
            </Box>
        </Container>
    )
};

export default LandingNav

