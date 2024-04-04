import React from 'react'
import './Experiance.css'
import Experiancecard, { Experiancecard1, Experiancecard2, Experiancecard3 } from './Experiancecard'

const Experiance = (props) => {
    return (
        <>
            <div className='container'>
                <div className='e-container' >
                    <div className='l-e-container'>
                        
                            <div className='text-center my-5'>
                                <div className='row' style={{position:"relative"}}>
                                    <div className="col-md-6 col-lg-6 my-4 ">
                                        <Experiancecard
                                            img1={props.send[0].img}
                                            box={props.send[0].img1}
                                            bar={props.send[0].heading}
                                            desc1={props.send[0].text}
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-6 my-4 " >
                                        <Experiancecard1 
                                            img1={props.send[1].img}
                                            box={props.send[1].img1}
                                            bar={props.send[1].heading}
                                            desc1={props.send[1].text}
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-6 my-4 ">
                                        <Experiancecard2
                                            img1={props.send[2].img}
                                            box={props.send[2].img1}
                                            bar={props.send[2].heading}
                                            desc1={props.send[2].text}
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-6 my-4 ">
                                        <Experiancecard3
                                            img1={props.send[3].img}
                                            box={props.send[3].img1}
                                            bar={props.send[3].heading}
                                            desc1={props.send[3].text}
                                        />
                                    </div>
                                    </div>
                            
                                    </div>
                                </div>
                                <div className='r-e-container'>
                                    <h2>30 Years Experience</h2>
                                    <p>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
                                    <button className='e-button'>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </>
                    )
}

                    export default Experiance