import React from 'react'
import './NewsLetter.css'
import fb from '../Pics/facebook.png'
import linkedin from '../Pics/linkedin.png'
import twi from '../Pics/twiter.png'
import logo from '../Pics/logo.png'

const NewsLetter = () => {
  return (
    <>
    <div className='newsletter'id='newslatterid'>
        <div className='left-side'>
            <div className='l-left-side content-heading'>ADDRESS:</div>
            <span className='l-left-side r-l-side'>6391 Elgin St. Celina, Delaware 10299</span><br></br>
            <div className='l-left-side content-heading'>Phone:</div>
            <span className='l-left-side r-l-side'>+84 1102 2703</span><br></br>
            <div className='l-left-side content-heading'>EMAIL:</div>
            <span className='l-left-side r-l-side'>hello@thebox.com</span><br></br>
            
        </div>
        <div className='right-side'><h5 className='content-heading'>NEWSLETTER:</h5>
        <input type='text' placeholder='Your email here' className='input'/>
        <button className='social-button'>Subcribe</button><br></br>
        <h5 className='content-heading'>SOCIAL:</h5>
        <img src={fb} alt="" className='social' />
        <img src={linkedin} alt="" className='social' />
        <img src={twi} alt="" className='social'/>

        </div>
        
    </div>
    <img src={logo} alt="" className='l-logo'/><span className='t-box'>TheBox</span>
    </>
  )
}

export default NewsLetter