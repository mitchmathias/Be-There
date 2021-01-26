import React from 'react';
import '../../App.css';
import LandingNav from "../Navs/LandingNav/index"
import './style.css';
function Hero() {
  return (
    <div className='hero-container'>
      <video src='/videos/BLM.mp4'alt ="group" autoPlay loop muted/>
      
      <h1>Be-There</h1>
      <p>Whether it's for Systemic Racism or Cleaning up your Community</p>
        <p muted>You can plan for that</p>
    
        <LandingNav />
    </div>
  );
}
export default Hero;