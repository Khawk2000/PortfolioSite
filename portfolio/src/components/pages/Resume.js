import React from 'react'
import '../../App.css'
import ResumeSection from '../ResumeSection.js'

//Make a more general resume to put in here so it makes sense with portfolio

export default function Resume() {
    return(
        <>
        <ResumeSection></ResumeSection>
        <div className="resume-container">
            <div className="resume-pdf">
                <iframe className='resume' title="Resume" src='KHResume.pdf' height='100%' width='100%'>Keegan Hawkins Resume</iframe>
            </div>
        </div>
        </>
    )
}   