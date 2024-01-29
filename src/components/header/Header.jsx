import React, { useState } from 'react'
import './header.css'
import Brand from '../brand/Brand'
import img from '../../images/image-hero-desktop.png'



const Header = () => {

  return (
    <div className='remote__header-container'>
      <div className="remote__header-content">
        <h1>Make remote work</h1>
        <p>Get your team is sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <button>Learn more</button>
        <Brand />
      </div>

      <div className="remote__header-content-image">
        <img src={img} alt="img" />
      </div>
    </div>
  )
}

export default Header