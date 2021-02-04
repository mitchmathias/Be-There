import React from 'react'
import LandingNav from '../../../Navs/LandingNav';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import Welcome from '../../../Welcome'
import Wrapper from '../../../Wrapper'
import OrgForm from './OrgForm'
import { CardContent } from '@material-ui/core';


const Organizations = () => {
	return (
		<>
			<Wrapper>
				
			
				<Container maxWidth="sm">
					<Box m={1} >
						<Card xs={6} style={{ alignItems: 'center', background: 'linear-gradient(45deg, #c54949 30%, #222831 90% )' }}>
							
							<CardContent>
								<OrgForm />
							</CardContent>
						</Card>
					</Box>
				</Container>
			</Wrapper>
		</>
	)
}

export default Organizations;