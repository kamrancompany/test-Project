import React from 'react'
import './/Services.css'
const Servicescard = (props1) => {
  return (
    <div className='servicesdiv' >
                    <div className="card  card2 " >
                        <div className="card-body servicescards" style={{paddingTop:"3rem"}}>
                            <h5 className="card-title"><img src={props1.img1}   className ='servicesimage' alt="" /></h5>
                            <h5 className="card-title"><img src={props1.box}  style={{width:"23.33px"}} alt="" /></h5>
                            <h5 className="card-title"><img src={props1.bar}  style={{width:"5rem"}} alt="" /></h5>
                            <p className="card-text text3 cardcontaint" >{props1.desc1}</p>
                        </div>
                    </div>
                </div>
  )
}
const Servicescard1 = (props1) => {
  return (
    <div className='ourreputation servicesdiv' >
                    <div className="card  card2 card246" >
                        <div className="card-body servicescards" style={{paddingTop:"3rem"}}>
                            <h5 className="card-title"><img src={props1.img1}   className ='servicesimage' alt="" /></h5>
                            <h5 className="card-title"><img src={props1.box}  style={{width:"23.33px"}} alt="" /></h5>
                            <h5 className="card-title"><img src={props1.bar}  style={{width:"5rem"}} alt="" /></h5>
                            <p className="card-text text3 cardcontaint" style={{color:"white"}} >{props1.desc1}</p>
                        </div>
                    </div>
                </div>
  )
}

export default Servicescard
export {Servicescard1}