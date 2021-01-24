import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateEvent from '../components/CreateEvent'
import Feed from '../components/Feed';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import Wrapper from '../components/Wrapper';
import EventCard from '../components/EventCard';
import HomeNav from '../components/Navs/HomeNav';
import MyProfile from '../components/MyProfile';


const  Home = () => {
    // const [tab, setTab] = useState("opps");

    // const clickOpps = () => {
    //     setTab("opps")
    // }
    // const clickEvents = () => {
    //     setTab("events")
    // }
    // const clickProfile = () => {
    //     setTab("profile")
    // }

    return (
        <Router>
            <Wrapper>
                <Jumbotron />
                <HomeNav />
                <Route exact path='/events' component={EventCard} />
                <Route exact path='/planEvents' component={CreateEvent} />
                <Route exact path='/myProfile' component={MyProfile} />
                <Footer />
            </Wrapper>
        </Router>
    )
}

export default Home