import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import CreateEvent from './components/CreateEvent'
import Feed from './components/Feed';
import Footer from './components/Footer';
import Login from './components/Login';
import Nav from './components/Nav';
// import Search from './components/Search';
import Signup from './components/Signup';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';
import EventCard from './components/EventCard';
import './App.css';

function App() {
 
  const [tab, setTab] = useState("signup");

  const clickOpps = () => {
    setTab("opps")
  }
  const clickEvents = () => {
    setTab("events")
  }
  const clickLogin = () => {
    setTab("login")
  }
  const clickSignup = () => {
    setTab("signup")
  }

  return (
    <BrowserRouter>
      <Wrapper>
        <Jumbotron />
        <Nav SetOppsTab={clickOpps} SetEventsTab={clickEvents} SetLoginTab={clickLogin} SetSignupTab={clickSignup}/>
        {tab === 'opps' && 
        <Feed>
          <EventCard /> 
        </Feed> }
        {tab === 'events' && 
        <CreateEvent />}
        {tab === 'signup' && <Signup />}
        {tab === 'login' && <Login />}
        <Footer />
      </Wrapper>
    </BrowserRouter>
    
  );
}

export default App;
