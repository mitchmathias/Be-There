import React, { Component } from 'react'
import LandingNav from '../../Navs/LandingNav';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import Wrapper from '../../Wrapper'
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
					<>

						<Card xs={8} style={{ alignItems: 'center', background: 'linear-gradient(45deg, #c54949 30%, #222831 90% )' }}>

							<CardContent>
								<Volunteers/>
							</CardContent>
						</Card>

					</>

				)
			case 2:
				return (
					<>
						
								<Card xs={6} style={{ alignItems: 'center', background: 'linear-gradient(45deg, #c54949 30%, #222831 90% )' }}>
									<CardContent>
										<Organizations />
									</CardContent>
								</Card>
					</>
				)
			default:
		}

	}
}
export default SignUpSwitch;