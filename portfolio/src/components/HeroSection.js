import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='coolearthvid.mp4' autoPlay loop muted />
      <h1>Portfolio</h1>
      <p>See what I have worked on</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Trailer <FontAwesomeIcon className='play-icon' icon={faPlay}/></Button>

      </div>
    </div>
  )
}

export default HeroSection
