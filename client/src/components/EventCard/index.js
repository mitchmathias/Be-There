import React from 'react';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import '../../style.css'

const EventCard = () => {
    return (
        <Container >
            <Box>
            <div className="row g-0">
                
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Example Event</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <h7 className="card-title">When: </h7>
                        <p className="card-text">Example Date</p>
                        <h7 className="card-title">When: </h7>                     
                        <p className="card-text">Example Location</p>

                        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            </Box>
        </Container>
    )
}

export default EventCard

