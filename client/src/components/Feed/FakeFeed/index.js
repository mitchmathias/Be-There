import React from "react"
import Grid from "@material-ui/core/Grid"
import EventCard from '../../EventCard'





const FakeFeed = () => {


    return (
        <>
            <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
            >
             <EventCard />   
             <EventCard />   
             <EventCard />   
             <EventCard />   
             <EventCard />   
             <EventCard />   
             
            </Grid>
        </>
    )

}
export default FakeFeed;