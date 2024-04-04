import React from 'react'
import './Services.css'
import Servicescard from './Servicescard'
import { Servicescard1 } from './Servicescard'

const Services = (props) => {
  return (
    <>
    
    <div className='container ' id='servicid'>
    <div className='text-center my-5 mx-4'>
    <div className='row servicesdiv'>
          <h3 className='reputaion' style={{background:" #F6F8F7"}}>Services</h3>
          
                    <div className="col-md-6 col-lg-4 my-4 ">
                        <Servicescard 

                            img1={props.send[0].img}
                            box={props.send[0].img2}
                            bar={props.send[0].img1}
                            desc1={props.send[0].title}
                        />
                    </div>
                    <div className="col-md-6 col-lg-4 my-4 ">
                        <Servicescard1 className='revalution'

                            img1={props.send[1].img}
                            box={props.send[1].img2}
                            bar={props.send[1].img1}
                            desc1={props.send[1].title}
                        />
                    </div>
                    <div className="col-md-6 col-lg-4 my-4">
                        <Servicescard

                            img1={props.send[2].img}
                            box={props.send[2].img2}
                            bar={props.send[2].img1}
                            desc1={props.send[2].title}
                        />
                    </div>
                    <div className="col-md-6 col-lg-4 my-4 ">
                        <Servicescard1

                            img1={props.send[3].img}
                            box={props.send[3].img2}
                            bar={props.send[3].img1}
                            desc1={props.send[3].title}
                        />
                    </div>
                    <div className="col-md-6 col-lg-4 my-4 ">
                        <Servicescard

                            img1={props.send[4].img}
                            box={props.send[4].img2}
                            bar={props.send[4].img1}
                            desc1={props.send[4].title}
                        />
                    </div>
                    <div className="col-md-6 col-lg-4 my-4 ">
                        <Servicescard1

                            img1={props.send[5].img}
                            box={props.send[5].img2}
                            bar={props.send[5].img1}
                            desc1={props.send[5].title}
                        />
                    </div>
        </div>
    </div>
    </div>
    
    </>
  )
}

export default Services