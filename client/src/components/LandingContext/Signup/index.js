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
import './style.css'

const SignUpForm = () => {
	return (
		<Wrapper>
			<img src='/images/group-pic.jpg' alt='' />
			<Welcome />
			<Container>
				<Box>
					<div className="row d-flex justify-content-center mb-3">
						<Card style={{justifyContent: "center"}}>
							<CardContent >
								<LandingNav />
								<SignUpSwitch />
							</CardContent>
						</Card>
					</div>
				</Box>
			</Container>
		</Wrapper>
	)
}

export default SignUpForm;