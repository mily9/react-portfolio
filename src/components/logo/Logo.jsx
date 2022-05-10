import React from 'react'
import "./logo.css"
import webmilia from '../../assets/logo.png'


const Nav = () => {
  return (
    <div class="navbar">
    <div className='logo'>
    <a href="#"><img src={webmilia} alt="logo" /></a>
    </div>
    </div>
  )
}

export default Nav