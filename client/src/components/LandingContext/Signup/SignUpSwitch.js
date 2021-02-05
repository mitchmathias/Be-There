import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core';
import Organizations from './Organizations';
import Volunteers from './Volunteers';

export class SignUpSwitch extends Component {
	state = {
		signUp: 1,
	}
	volunteerSignUp = () => {
		const { signUp } = this.state;
		this.setState({
			signUp: signUp + 1
		});

	}
	orgSignUp = () => {
		const { signUp } = this.state;
		this.setState({
			signUp: signUp + 2
		});
	}
	handleChange = input => (e) => {
		this.setState({ [input]: e.target.values });
	}
	render() {
		const { signUp } = this.state
		switch (signUp) {
			case 1:
				return (
					<Card style={{ justifyContent: 'center' }}>
						<Volunteers />
					</Card>
				)
			case 2:
				return (
					<Card >
						<Organizations />
					</Card>
				)
			default:
		}

	}
}
export default SignUpSwitch;