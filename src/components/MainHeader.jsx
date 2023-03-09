

import React from 'react'
import { Link } from 'react-router-dom';
import Image from "../images/main_header.png"
import "../pages/home/home.css"
import "../index.css"


const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className="main__header-left">
          <h4>#100DaysofWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
          Step up to the challenge and join the legends of the fitness world. Your journey to greatness starts here.
          </p>
          <Link to ="/plans" className='btn lg'>Get Started</Link>

        </div>
        <div className="main__header-right">
        <div className="main__header-circle"></div>
        <div className="main__header-image">
          <img src={Image} alt="Main Header Image"/>
        </div>


        </div>
      </div>

    </header>
  )
}

export default MainHeader