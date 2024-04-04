import React from 'react'
import './Project.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import circle from '..//Pics/circle.png'
import circle1 from '..//Pics/circle2.png'
import Projectcard from './Projectcard'
import vrbar from '../Pics/verticalbar.png'
import { Link, Outlet } from 'react-router-dom';

const Projects = (props) => {
    <Outlet/>
  return (
    <>
    <div className='container' id='projectid'>
        <h3>Projects</h3><br></br>
        <div className=' row'>
            <div className='col-md-4'>
                <div className='allproject'>
        <img src= {vrbar} style={{height:"28px",width:"4px",marginRight:"6px"}}/>
        <h4>All</h4>
        </div>
        <div>
        <Link to ="/project/commercial"  style={{textDecoration:"none"}}><p className='sub-con'>Commercial</p></Link>
        </div>
        <div>
        <Link to ="/project/residential"  style={{textDecoration:"none"}}><p className='sub-con'>Residential</p></Link>
        </div>
        <div>
        <Link to ="/project/other"  style={{textDecoration:"none"}}><p className='sub-con'>Other</p></Link>
        </div>
        </div>
        <div className='col-md-8'>
       
        <div className='row my-4'>
        
                    <div className="col-md-6   mt-5 col-lg-5 mr-5 ">
                        <Projectcard

                            img1={props.send[0].img}
                            tile1={props.send[0].title}
                            desc1={props.send[0].subheading}
                        />
                    </div>
                    <div className="col-md-6    mt-5 col-lg-5 ">
                        <Projectcard

                            img1={props.send[1].img}
                            tile1={props.send[1].title}
                            desc1={props.send[1].subheading}
                        />
                    </div>
                    <div className="col-md-6   mt-5 col-lg-5 mr-5">
                        <Projectcard

                            img1={props.send[2].img}
                            tile1={props.send[2].title}
                            desc1={props.send[2].subheading}
                        />
                    </div>
                    <div className="col-md-6    mt-5 col-lg-5">
                        <Projectcard

                            img1={props.send[3].img}
                            tile1={props.send[3].title}
                            desc1={props.send[3].subheading}
                        />
                    </div>
        </div>
        <div className='buttondiv'>
        <button className='projectbutton'><ArrowBackIcon style={{}}/>Back</button>
        <div>
        <img src={circle} alt="" className='circlebtn' />
        
        <img src={circle1} alt="" className='circlebtn'/>
        
        
        <img src={circle1} alt="" className='circlebtn'/>
        
       
        <img src={circle1} alt="" className='circlebtn'/>
        
        </div>
        <button className='projectbutton'>Next<ArrowForwardIcon/></button>
        </div>
        </div>
    </div>
    </div>
   
    </>
    
  )
}

export default Projects