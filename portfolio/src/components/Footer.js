import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-links">
        <div className="footer-link-wrapper">
            <h2>Social Links: </h2>
            <div className="footer-link-items">
                <Link className='social-link' to='https://www.linkedin.com/in/keegan-hawkins-26b5121ba/'><FontAwesomeIcon icon={faLinkedinIn}/></Link>
                <Link className='social-link' to='https://www.github.com/Khawk2000'><FontAwesomeIcon icon={faGithub}/></Link>
                <Link className='social-link' to='https://codepen.io/Keegan-Hawkins'><FontAwesomeIcon icon={faCodepen}/></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
