import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Landing from './pages/landing'
import Home from './pages/home'
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Wrapper>
        <Landing />
      </Wrapper>
    </BrowserRouter>
    
  );
  }


export default App;
