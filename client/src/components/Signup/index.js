import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './style.css'
import LandingNav from '../Navs/LandingNav';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import Welcome from '../Welcome'
import Wrapper from '../Wrapper'
import TextField from '@material-ui/core/TextField';
import SignUpStepper from './userStepper/stepper';

class Signup extends Component {

	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			email: '',
			firstName: '',
			lastName: '',
			location: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.onChangeFirstName = this.onChangeFirstName.bind(this)
		this.onChangeLastName = this.onChangeLastName.bind(this)
		this.onChangeEmail = this.onChangeEmail.bind(this)
		this.onChangeUserName = this.onChangeUserName.bind(this)
		this.onChangePassword = this.onChangePassword.bind(this)
		this.onChangeConfirm = this.onChangeConfirm.bind(this)
	}

	onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
	}
	
	onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
	}
	
	onChangeUserName(e) {
        this.setState({
            username: e.target.value
        });
	}

	onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
	}

	onChangeConfirm(e) {
        this.setState({
            confirmPassword: e.target.value
        });
    }

	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		axios.post('/api/users', {
			username: this.state.username,
			password: this.state.password,
			email: this.state.email,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			location: this.state.location
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({
						redirectTo: '/home'
					})
					this.sendEmail()
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
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
										<form className="form-horizontal" autoComplete="off">
											<div className="form-group">

												<TextField
													id="outlined-search"
													label="First Name"
													variant="outlined"
													value={this.state.firstName}
													onChange={this.onChangeFirstName}
												/>
											</div>
											<div className="form-group">

												<TextField
													id="outlined-search"
													label="Last Name"
													variant="outlined"
													value={this.state.lastName}
													onChange={this.onChangeLastName}

												/>

											</div>
											<div className="form-group">

												<TextField
													id="outlined-search"
													label="Email"
													variant="outlined"
													value={this.state.email}
													onChange={this.onChangeEmail}

												/>
											</div>
											<div className="form-group">
												<div className="form-group">
													<TextField
														id="outlined-search"
														label="UserName"
														variant="outlined"
														value={this.state.username}
														onChange={this.onChangeUserName}
														autoComplete="off"
													/>
												</div>
												<div className="form-group">
													<div className="col-mb-auto">
														<TextField
															id="outlined-search"
															label="Password"
															variant="outlined"
															type="password"
															value={this.state.password}
															onChange={this.onChangePassword}
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
														value={this.state.confirmPassword}
														onChange={this.onChangeConfirm}
													/>
												</div>
												<div className="form-group">
													<button
														className="btn btn-primary col-mb-auto"
														onClick={this.handleSubmit}
														type="submit"
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
	}
}

export default Signup