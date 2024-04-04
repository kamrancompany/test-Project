import React from 'react'
import img from '../Pics/unsplash_6anudmpILw4.png'
const Aboutus = () => {
  return (
    <>
      <div className='container' id='aboutus'>
        <div className='container1'>
          <img src={img} alt="logo" className='about' />
          
          <div className='aboutuscontent'>
            <p className='heading'>About us</p><br></br>
            <p className='contenttext'>
              For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.
            </p>
            <br></br>
            <button className='button'>More on Our History</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus