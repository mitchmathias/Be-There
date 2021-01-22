import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import CreateEvent from '../components/CreateEvent'
import Feed from '../components/Feed';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Wrapper from '../components/Wrapper';
import EventCard from '../components/EventCard';
import HomeNav from '../components/Navs/HomeNav';



function Home () {
    const [tab, setTab] = useState("Home");

    const clickOpps = () => {
        setTab("opps")
    }
    const clickEvents = () => {
        setTab("events")
    }

    return (
        <BrowserRouter>
            <Wrapper>
                <Jumbotron />
                <HomeNav SetOppsTab={clickOpps} SetEventsTab={clickEvents}  />
                {tab === 'opps' &&
                    <Feed>
                        <EventCard />
                    </Feed>}
                {tab === 'events' &&
                    <CreateEvent />}
                <Footer />
            </Wrapper>
        </BrowserRouter>
    )
}

export default Home