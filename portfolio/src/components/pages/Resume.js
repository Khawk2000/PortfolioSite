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
                <h2>Resume</h2>
                <iframe title="Resume" src='ResumeKH.pdf' width="1600px" height="1500px">Keegan Hawkins Resume</iframe>
            </div>
        </div>
        </>
    )
}   