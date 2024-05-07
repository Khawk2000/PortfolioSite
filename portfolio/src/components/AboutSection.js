import React from 'react'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='aboutit.mp4' autoPlay loop muted />
      <h1>About</h1>
    </div>
  )
}

export default HeroSection
