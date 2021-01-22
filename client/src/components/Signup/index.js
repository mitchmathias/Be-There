import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			email: '',
			firstName: '',
			lastName: ''
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

		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password,
			email: this.state.email,
			firstName: this.state.firstName,
			lastName: this.state.lastName
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					this.setState({
						redirectTo: '/login'
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
		return (
			<div className="row">
				<div className="col-3">
					<div className="signupForm card border-primary">
						<div className="card-body">
							<h4 className="col-7">Sign up</h4>
							<form className="form-horizontal">
								<div className="form-group">
									<div className="col-1 col-ml-auto">
										<label className="form-label" htmlFor="email">Email</label>
									</div>
									<div className="col-3 col-mr-auto">
										<input className="form-input"
											type="text"
											id="email"
											name="email"
											placeholder="Email"
											value={this.state.email}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-1 col-ml-auto">
										<label className="form-label" htmlFor="username">Username</label>
									</div>
									<div className="col-3 col-mr-auto">
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
									<div className="col-1 col-ml-auto">
										<label className="form-label" htmlFor="password">Password: </label>
									</div>
									<div className="col-6 col-mr-auto">
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
									<div className="col-1 col-ml-auto">
										<label className="form-label" htmlFor="firstName">First Name: </label>
									</div>
									<div className="col-6 col-mr-auto">
										<input className="form-input"
											placeholder="First Name"
											type="firstName"
											name="firstName"
											value={this.state.firstName}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-1 col-ml-auto">
										<label className="form-label" htmlFor="lastName">Last Name: </label>
									</div>
									<div className="col-6 col-mr-auto">
										<input className="form-input"
											placeholder="Last Name"
											type="lastName"
											name="lastName"
											value={this.state.lastName}
											onChange={this.handleChange}
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-7">
									<button
										className="btn btn-primary col-mr-auto"
										onClick={this.handleSubmit}
										type="submit"
									>Sign up</button>
								</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Signup

