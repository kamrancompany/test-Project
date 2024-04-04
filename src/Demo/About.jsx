import React from 'react'
import './aboutus.css'
import img from '../Pics/unsplash_6anudmpILw4.png'

const About = () => {
  return (
    <>
    
        <div className='aboutmain' id='aboutid'>
            <div className='l-about'>
            <img src={img} alt="logo" className='aboutmodle' />
          
            </div>
            <div className='r-about'>
            <h3 className='r-heading'>About us</h3><br></br>
            <p className='r-text'>
              For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.
            </p>
            <br></br>
            <button className='r-btn'>More on Our History</button>
            </div>
        </div>
    
    </>
  )
}

export default About