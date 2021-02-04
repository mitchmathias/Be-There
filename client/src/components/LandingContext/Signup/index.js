import React from 'react'
import LandingNav from '../../Navs/LandingNav';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import Welcome from '../../Welcome'
import Wrapper from '../../Wrapper'
import SignUpSwitch from './SignUpSwitch'
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const SignUpForm = () => {
	return (
		<>
			<Wrapper>
				<img src='/images/group-pic.jpg' alt='' />
				<Welcome />
				<Container maxWidth="sm">
					<Box m={10} >
						<Card xs={6} style={{ alignItems: 'center', background: 'linear-gradient(45deg, #c54949 30%, #222831 90% )', borderRadius: '10%' }}>
							<LandingNav />
							<CardContent>
								<SignUpSwitch>
									{/* <Button
										varient="contained"
										label="Volunteers"
										color="primary"
										href='./Volunteers'
									>Volunteers</Button> */}
									{/* <Button
										varient="contained"
										label="Organizations"
										color="primary"
										href='./Organizations'
									>Organizations</Button> */}
								</SignUpSwitch>
							</CardContent>
						</Card>
					</Box>
				</Container>
			</Wrapper>
		</>
	)
}

export default SignUpForm;