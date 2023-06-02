import React from 'react'
import {GitHub,Email,LinkedIn} from '@mui/icons-material'
import '../styles/Home.css'
function Home() {
  return (
    <div className='home'>
        <div className='about'>
          
          <h1>Hey there! I am silpa</h1>
         
          <div className='prompt'>
            <p>Mern stack developer</p>
           <a href='https://github.com/'> <GitHub/></a>
            <a href='https://gmail.google.com'><Email/></a>
            <a href='https://www.linkedin.com/in/silpa-s-00263025b/'><LinkedIn/></a>
          </div>
          </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='items'>
                  <h2>Front-End</h2> 
                  <span>React,Bootstrap,Html,Css</span> 
                </li>
                <li className='items'>
                  <h2>Back-End</h2> 
                  <span>Nodejs,Express,MongoDB</span> 
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home