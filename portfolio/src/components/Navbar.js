import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo'>
                    <p className='navbar-title'>Keegan Hawkins</p><FontAwesomeIcon icon={faBriefcase} onClick={closeMobileMenu}/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className="nav-item">
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                      Resume
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Contact
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline' goto='/contact'>Contact</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar
