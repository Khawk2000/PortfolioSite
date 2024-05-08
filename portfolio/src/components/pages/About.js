import React from 'react'
import '../../App.css'
import AboutSection from '../AboutSection.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonSwimming, faGolfBallTee, faFishFins, faMicrochip, faPersonArrowUpFromLine, faVideo  } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Button } from '../Button.js'

export default function About() {
    return(
        <>
        <AboutSection></AboutSection>
        <div className="about-container">
            <section className='about-container-hobbies'>
                <h1 className='hobbies-title'>My Hobbies</h1>
                <ul className='hobbies-list'>
                    <div className='list-item-container'>
                        <li className="hobbies-label">Swimming <FontAwesomeIcon icon={faPersonSwimming}/></li>
                        <p className='hobbies-text'>I have been swimming competitively my entire life and have loved the sport since day one. I am currently training for the US Olympic Trials in Indianapolis, IN coming up here in June 2024.</p>
                    </div>
                    <div className='list-item-container'>
                        <li className="hobbies-label">Fishing <FontAwesomeIcon icon={faFishFins}/></li>
                        <p className='hobbies-text'>Spending time outdoors is my favorite way to unwind/pass the time, especially in the summer. Fishing is something that requires no talking, thinking, or stress.</p>
                    </div>
                    <div className='list-item-container'>
                        <li className="hobbies-label">Golfing <FontAwesomeIcon icon={faGolfBallTee}/></li>
                        <p className='hobbies-text'>I have only recently picked this one up. That being said I am sure you know that I am FANTASTIC at golf and DEFINITELY shoot only 2 over par for 18 holes.</p>
                    </div>
                </ul>
            </section>
            <section className='about-container-interests'>
                <h1 className='interests-title'>My Interests</h1>
                <ul className='interests-list'>
                    <div className='list-item-container'>
                        <li className="interests-label">Technology <FontAwesomeIcon icon={faMicrochip}/></li>
                        <p className='interests-text'>I am always intersted in learning new technology. Whether its developing professionally, for fun, or just reading up on the latest.</p>
                    </div>
                    <div className='list-item-container'>
                        <li className="interests-label">Self Improvement <FontAwesomeIcon icon={faPersonArrowUpFromLine}/></li>
                        <p className='interests-text'>I learned this very early on being in sports as a kid, but I try to apply it to everything in my life. 1% BETTER EVERYDAY!</p>
                    </div>
                    <div className='list-item-container'>
                        <li className="interests-label">Video Editing <FontAwesomeIcon icon={faVideo}/></li>
                        <p className='interests-text'>The past year and a half I've tried my hand at video editing. 
                        Originally just for my brothers youtube channel, but now I have a shared Youtube channel with my both my brothers where we bond over video games and having fun. 
                        (Shameless plug)<Button buttonSize='btn--large' buttonStyle='btn--cool' goto='https://www.youtube.com/@HawkBrosGaming/featured' className='YTplug'><FontAwesomeIcon icon={faYoutube}/> HawkBrosGaming</Button></p>
                    </div>
                </ul>
            </section>
        </div>
        </>
    )
}