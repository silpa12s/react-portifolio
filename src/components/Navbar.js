import React from 'react'
import '../styles/Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
       <div className='links'>
          <a href="/">Home</a>
          <a href="/skills">Skills</a>
          <a href="/experience">Experience</a>
          <a href='/about'>About</a>
          <a href='/contact'>Contact</a>
       </div>
    </div>
  )
}

export default Navbar;