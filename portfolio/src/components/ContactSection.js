import React from 'react'
import './ContactSection.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='contact.mp4' autoPlay loop muted />
      <h1>Contact</h1>
      <h3>Email: <a id='email' className='email-link' href='mailto:keeganmhawkins@gmail.com'>keeganmhawkins@gmail.com</a></h3>
      <h3>Phone: 630-473-7977</h3>
      <h3><FontAwesomeIcon icon={faAngleDoubleDown} className='float-arrows'/> LinkedIn and other socials are down below <FontAwesomeIcon icon={faAngleDoubleDown} className='float-arrows'/></h3>
    </div>
  )
}

export default HeroSection
