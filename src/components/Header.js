import React from 'react'
import './header.css'
import picture from '../images/trollFace2.png'

function Header() {
  return (
    <header className='header'>
        <img 
        src={picture} 
        alt='icon'
        className="header-image"/>
        <h2 className='header-title'>Meme generator</h2>
        <h5 className='header-project'>React Course - Project</h5>
    </header>
  )
}

export default Header