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

class Signup extends Component {
	constructor() {
		super()
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
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
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
						redirectTo: '/'
					})
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
			 <img src='/images/group-pic.jpg' alt=''/>
			<Welcome />
			<LandingNav />
				<Container>
					<Box>
						<div className="row d-flex justify-content-center mb-3">
							<Card style={{ alignItems: 'center' }}>
								<div className="card-body">
									<h1 className="card-title">Sign up</h1>
									<form className="form-horizontal">
										<div className="form-group">
											<div className="col-mb-auto">
												<label className="form-label" htmlFor="firstName"><h4>First Name:</h4> </label>
											</div>
											<div className="col-mb-auto">
												<input className="form-input"
													placeholder="First Name"
													type="firstName"
													name="firstName"
													value={this.state.firstName}
													onChange={this.handleChange}
													required
												/>
											</div>
										</div>
										<div className="form-group">
											<div className="col-mb-auto">
												<label className="form-label" htmlFor="lastName"><h4>Last Name:</h4> </label>
											</div>
											<div className="col-mb-auto">
												<input className="form-input"
													placeholder="Last Name"
													type="lastName"
													name="lastName"
													value={this.state.lastName}
													onChange={this.handleChange}
													required
												/>
											</div>
										</div>
										<div className="form-group">
											<div className="col-mb-auto">
												<label className="form-label" htmlFor="email"><h4>Email:</h4></label>
											</div>
											<div className="col-mb-auto">
												<input className="form-input"
													type="text"
													id="email"
													name="email"
													placeholder="Email"
													value={this.state.email}
													onChange={this.handleChange}
													required
												/>
											</div>
										</div>
										<div className="form-group">
											<div className="form-group">
												<div className="col-mb-auto">
													<label className="form-label" htmlFor="username"><h4>Username:</h4></label>
												</div>
												<div className="col-mb-auto">
													<input className="form-input"
														type="text"
														id="username"
														name="username"
														placeholder="Username"
														value={this.state.username}
														onChange={this.handleChange}
													/>
												</div>
											</div>
											<div className="form-group">
												<div className="col-mb-auto">
													<label className="form-label" htmlFor="password"><h4>Password:</h4></label>
												</div>
												<div className="col-mb-auto">
													<input className="form-input"
														placeholder="Password"
														type="password"
														name="password"
														value={this.state.password}
														onChange={this.handleChange}
													/>
												</div>
											</div>
											<div className="form-group">
												<div className="col-mb-auto">
													<label className="form-label" htmlFor="confirmPassword"><h4>Confirm Password:</h4> </label>
												</div>
												<div className="col-mb-auto">
													<input className="form-input"
														placeholder="Confirm Password"
														type="password"
														name="confirmPassword"
														value={this.state.confirmPassword}
														onChange={this.handleChange}
													/>
												</div>
											</div>
											<div className="form-group">
												<div className="">
													<button
														className="btn btn-primary col-mb-auto"
														onClick={this.handleSubmit}
														type="submit"
													><h5>Sign up</h5></button>
												</div>
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