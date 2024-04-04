import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Main = () => {
  
  return (
    <>
      <div className="pos_banner" id='home'>
        <div className="main_banner">
          <div className="main_text ">
            <h1>
              Building things <br /> is our mission.
            </h1>
          </div>

          <div class="card feature_main" style={{ width: "25rem" }}>
            <div class="card-body">
              <h5 class="card-title">Feature Projects</h5>
              <p class="card-text mainbodytext " style={{fontSize:"large"}}>The National University of <br></br>Architecture</p>   
               <h5 class="card-title"><button className='mainbutton' ><ArrowBackIcon/>Back</button>
              <button className='mainbutton'><ArrowForwardIcon/>Next</button>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main