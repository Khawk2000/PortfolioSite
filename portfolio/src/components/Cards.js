import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                src='workoutbuddy.png'
                text="Mental Fortitude Workout Buddy: Application that helps track and log workouts"
                label="Full Stack"
                path='https://www.mentalfortitudellc.com'
                />
                <CardItem 
                src='MF_Logo_Banner.png'
                text="Mental Fortitude Nutrition Tracker: Coming soon..."
                label="Full Stack"
                path='/'
                />
            </ul>
            <ul className="cards__items">
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
