import React, { Component, useState } from 'react';
import API from '../../utils/API'
import { EventList, EventListItem } from "./EventList";
import '../../style.css'



class EventCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            events: [],
            eventSearch: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    componentDidMount = () => {
        this.handleSubmit()
    }

    handleSubmit = () => {
        
        API.getEvents(this.eventSearch)
            .then(res => this.setState({
                events: res.data}))
            
            .catch(err => console.log(err));
    };
    render() {
        return (
            <>
                <EventList>
                    {this.state.events.map(event => {
                        console.log(event)
                        return (
                            <EventListItem
                                key={event.id}
                                title={event.title}
                                body={event.body}
                                organization={event.organization}
                                date={event.date}
                                favs={"5"}
                            />
                        );
                    })}
                </EventList>
            </>
        )
    }
}
export default EventCard;
