import React from 'react'

const Ourreputaioncard = (props1) => {
  return (
  <>
  <div className='container'>
     <div className='ourreputation' style={{height:"10rem",border:"none"}}>
                    <div className="card  card2" style={{height:"10rem",width:"19rem"}}>
                        <div className="card-body" >
                            <h5 className="card-title"><img src={props1.img1}  style={{width:"20px"}} alt="" /></h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary bestservices my-4 cardtitle">{props1.tile1}</h6>
                            <p className="card-text text3" >{props1.desc1}</p>
                        </div>
                    </div>
                </div>
                </div>
  </>
  )
}

export default Ourreputaioncard