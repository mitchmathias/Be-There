import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import LandingNav from './components/Navs/LandingNav'
import Landing from './pages/landing'
import Home from './pages/home'
import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
function App() {

  return (
    <Router>
      <Wrapper>
        <Landing />
        <LandingNav />
      </Wrapper>
    </Router>
  );
}

export default App;
