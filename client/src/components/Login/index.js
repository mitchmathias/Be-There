import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './style.css'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import Welcome from '../Welcome'
import LandingNav from '../Navs/LandingNav'
import Footer from '../Footer'

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            // redirectTo: null
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onchangePassword = this.onchangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onchangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/api/users/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    console.log("weMadeIT")
                    this.setState({
                        redirectTo: '/events'
                    })

                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
        this.setState({
            username: "",
            password: ""
        })
        // this.props.history.push("/myProfile");
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <Welcome />
                    <LandingNav />
                    <Container>
                        <Box>
                            <div className="row d-flex justify-content-center">
                                <Card>
                                    <div className="card-body">
                                        <h1 className="card-title">Login</h1>
                                        <form onSubmit={this.onSubmit} className="form-horizontal">
                                            <div className="form-group">
                                                <div className=" col-mr-auto">
                                                    <label className="form-label" htmlFor="username"><h4>Username:</h4></label>
                                                </div>
                                                <div className=" col-mr-auto">
                                                    <input className="form-input"
                                                        type="text"
                                                        id="username"
                                                        name="username"
                                                        placeholder="Username"
                                                        value={this.state.username}
                                                        onChange={this.onChangeUsername}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className=" col-mr-auto">
                                                    <label className="form-label" htmlFor="password"><h4>Password:</h4></label>
                                                </div>
                                                <div className=" col-mr-auto">
                                                    <input className="form-input"
                                                        placeholder="password"
                                                        id="password"
                                                        type="password"
                                                        name="password"
                                                        value={this.state.password}
                                                        onChange={this.onchangePassword}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="">
                                                    <button
                                                        className="btn btn-primary  col-mr-auto col-mb-auto"
                                                        onClick={this.onSubmit}
                                                        variant='success'
                                                        type="submit"><h5>Login</h5>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Card>
                            </div>
                        </Box>
                    </Container>
                    <Footer />
                </div>
            )
        }
    }
}

export default Login;