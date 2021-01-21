import React, {useState} from 'react';
import Feed from './components/Feed';
import Footer from './components/Footer';
import Login from './components/Login';
import Nav from './components/Nav';
import Calendar from "react-calendar";
// import Search from './components/Search';
import Signup from './components/Signup';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import EventCard from './components/EventCard';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  const [value, onChange] = useState(new Date());
  const [tab, setTab] = useState("about");

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
        <Title />
        <Nav SetOppsTab={clickOpps} SetEventsTab={clickEvents} SetLoginTab={clickLogin} SetSignupTab={clickSignup}/>
        {tab === 'opps' && <Feed />}
        {tab === 'events' && <EventCard />}
        {tab === 'signup' && <Signup />}
        {tab === 'login' && <Login />}
        <Calendar onChange={onChange} value={value}/>
        <Footer />
      </Wrapper>
    </BrowserRouter>
    
  );
}

export default App;
