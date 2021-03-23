import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import LandingNav from '../../../Navs/LandingNav';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import Welcome from '../../../Welcome'
import Wrapper from '../../../Wrapper'
import TextField from '@material-ui/core/TextField';

const Signup = () => {

    const useSignUpForm = (callback) => {

        const [inputs, setInputs] = useState({});

        const handleSubmit = (event) => {
            if (event) {
                event.preventDefault();
                console.log("HITR")
            }
            callback();
        }

        const handleInputChange = (event) => {
            event.persist();
            setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
        }

        return {
            handleSubmit,
            handleInputChange,
            inputs
        };
    }

    const signedUp = () => {
        console.log('close')
        console.log(inputs.username)
        axios.post('/api/user', {
            username: inputs.username,
            password: inputs.password,
            email: inputs.email,
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            location: inputs.location
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('successful signup')
                    this.setState({
                        redirectTo: '/home'
                    })
                } else {
                    console.log('username already taken')
                }
            }).catch(error => {
                console.log('signup error: ')
                console.log(error)

            })
    }





    const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signedUp);


    return (
        <Wrapper>
            <img src='/images/group-pic.jpg' alt='' />
            <Welcome />
            <Container>
                <Box>
                    <div className="row d-flex justify-content-center mb-3">
                        <Card>
                            <div className="card-body">
                                <LandingNav />
                                {/* <SignUpStepper /> */}
                                <form className="form-horizontal" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <TextField
                                            id="outlined-search"
                                            label="First Name"
                                            variant="outlined"
                                            onChange={handleInputChange} value={inputs.firstName}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            id="outlined-search"
                                            label="Last Name"
                                            variant="outlined"
                                            onChange={handleInputChange} value={inputs.lastName}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            id="outlined-search"
                                            label="Email"
                                            variant="outlined"
                                            onChange={handleInputChange} value={inputs.email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group">
                                            <TextField
                                                id="outlined-search"
                                                label="UserName"
                                                variant="outlined"
                                                onChange={handleInputChange} value={inputs.username}
                                                autoComplete='off'
                                            />
                                        </div>
                                        <div className="form-group">
                                            <div className="col-mb-auto">
                                                <TextField
                                                    id="outlined-search"
                                                    label="Password"
                                                    variant="outlined"
                                                    type="password"
                                                    onChange={handleInputChange} value={inputs.password}
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <TextField
                                                id="outlined-search"
                                                label="Confirm Password"
                                                variant="outlined"
                                                type="password"
                                                onChange={handleInputChange}
                                                autoComplete="off"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button
                                                className="btn btn-primary col-mb-auto"
                                                type="submit"
                                                onClick={handleSubmit}
                                            ><h5>Sign up</h5></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Card>
                    </div>
                </Box>
            </Container>
        </Wrapper>
    )
}

export default Signup
