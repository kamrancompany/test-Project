import React from 'react'
import Ourreputaioncard from './Ourreputaioncard'



const OurReputation = (props) => {
    return (
        <>

            <div className="container">
                <div className='text-center my-5'>
                    <p className='reputaion'>Our Reputation</p>
                </div>
                <div className='row'>
                    <div className="col-md-6 col-lg-4 ">
                        <Ourreputaioncard

                            img1={props.send[0].img}
                            tile1={props.send[0].title}
                            desc1={props.send[0].desc}

                        />
                    </div>

                    <div className="col-md-6 col-lg-4 mt-3 mt-md-0" >

                        <Ourreputaioncard

                            img1={props.send[1].img}
                            tile1={props.send[1].title}
                            desc1={props.send[1].desc}
                        />
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3 mt-lg-0">

                        <Ourreputaioncard

                            img1={props.send[2].img}
                            tile1={props.send[2].title}
                            desc1={props.send[2].desc}
                        />
                    </div>
                </div>

            </div>

        </>

    )
}

export default OurReputation