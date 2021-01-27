import React, { useState } from 'react';
import API from '../../utils/API'
import { EventList, EventListItem } from "./EventList";
import '../../style.css'



const EventCard = () => {

   const [events, setEvents] = useState([]);
    const [eventSearch, setEventSearch] = useState("");

    const handleInputChange = (e) => {
        const { value } = e.target;
        setEventSearch(value); // updates the appropriate state

    } //might not need a handleinput change unless we finish the search bar form

     const handleSubmit = (e) => {
        e.preventDefault();
        API.getEvents(eventSearch)
            .then(res => setEvents(res.data))
            .catch(err => console.log(err));
    };
    
    return (
        <>
       <button onClick={handleSubmit}>clicky</button>
        
           
            {/* {events.length ? (
                <>
                    <h1 className="text-center">No Events Today!</h1>
                    <p className="text-center"> Plan one today!</p>
                </>
            ) : (*/}

            <EventList>
                {events.map(event => {
                    console.log(event)
                    return (
                        
              
                        <EventListItem
                            key={event.id}
                            title={event.title}
                            body={event.body}
                            organization={event.organization}
                            date={event.date}
                            favs={"work u son of a shepard"}
                        />
                        
                    );
                })}
            </EventList>

        </>
    )
    
}
export default EventCard;
