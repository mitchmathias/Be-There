import React from 'react';
import '../../App.css';
import LandingNav from "../Navs/LandingNav/index"
import './style.css';

function Hero() {
  return (
    <div className='hero-container'>
      <img src='/images/group-pic.jpg' alt=''/>
      <h1><strong>Be There</strong></h1>
      <p><strong>Whether it's for Systemic Racism or Cleaning up your Community</strong></p>
        <p><strong>You can plan for that</strong></p>
        <LandingNav />
    </div>
  );
}
export default Hero;