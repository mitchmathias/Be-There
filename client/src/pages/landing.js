import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

const Landing = () => {

    return (
        <Router>
            <Welcome />
            <LandingNav />
            <Route path='/signup' render={(props) =>
                <Signup {...props} updateUser={this.updateUser} />
            } />
            <Route path='/login' render={(props) =>
                <Login {...props} updateUser={this.updateUser} />
            } />

            {/* <Route path='/signup' exact component={Signup} />
            <Route path='/login' exact component={Login} /> */}

            {/* Remove Below Later */}

            <HomeNav />
            <Route exact path='/events' component={EventCard} />
            <Route exact path='/planEvents' component={CreateEvent} />
            <Route exact path='/myProfile' component={MyProfile} />

            {/* Remove Above Later  */}

            <Footer />
        </Router>
    )
}

export default Landing