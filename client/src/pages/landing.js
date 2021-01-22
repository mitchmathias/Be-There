import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';
import Wrapper from '../components/Wrapper';
import LandingNav from '../components/Navs/LandingNav'
import Login from '../components/Login';
import Signup from '../components/Signup';

// Remove Later Testing only
import HomeNav from '../components/Navs/HomeNav'
import CreateEvent from '../components/CreateEvent'
import Feed from '../components/Feed';
import EventCard from '../components/EventCard';
import MyProfile from '../components/MyProfile'

function Landing () {
    const [tab, setTab] = useState("landing");

    const clickLogin = () => {
        setTab("login")
    }
    const clickSignup = () => {
        setTab("signup")
    }
    const clickOpps = () => {
        setTab("opps")
    }
    const clickEvents = () => {
        setTab("events")
    }
    const clickProfile = () => {
        setTab("profile")
    }

    return (
        <BrowserRouter>
            <Wrapper>
                <Welcome />
                <LandingNav SetLoginTab={clickLogin} SetSignupTab={clickSignup}  />
                {tab === 'login' && 
                    <Login />}
                {tab === 'signup' && 
                    < Signup />}

                {/* Remove Below Later */}

                <HomeNav SetOppsTab={clickOpps} SetEventsTab={clickEvents} SetProfileTab={clickProfile} />
                {tab === 'opps' && 
                    <EventCard />}
                {tab === 'events' &&
                    <CreateEvent />}
                {tab === 'profile' &&
                    <MyProfile />}

                {/* Remove Above Later  */}

                <Footer />
            </Wrapper>
        </BrowserRouter>
    )
}

export default Landing