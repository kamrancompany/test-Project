import React from 'react'

const Experiancecard = (props1) => {
  return (
    <>
    <div className="card expcard" id = 'cardid' >
        <img src={props1.img1} className=" card-img-top expcrdimg0" style={{height:"79px",width:"79px"}} alt="..." />
        <div className="card-body ">
          <h1 className="card-title " style={{textAlign:"left",marginTop:"-6rem"}}>{props1.bar}</h1>
          <div className='experiancecrd'>
          <img src={props1.box} style={{height:"28px",width:"7px",paddingLeft:"-3rem"}} class="card-img-top" alt="..." />
          <p class="card-text decryption">{props1.desc1}</p>
          </div>
        </div>
      </div>
    </>

    
  )
}
const Experiancecard1 = (props1) => {
  return (
    <>
    <div style={{position:"relative"}}>
    <div className="card expcard1" id = 'cardid'>
        <img src={props1.img1}  style={{height:"79px",width:"79px"}} className="card-img-top expcrdimg1" alt="..." />
        <div className="card-body ">
          <h1 className="card-title " style={{textAlign:"left",marginTop:"-6rem"}}>{props1.bar}</h1>
          <div className='experiancecrd'>
          <img src={props1.box} style={{height:"28px",width:"7px",paddingLeft:"-3rem"}} class="card-img-top" alt="..." />
          <p class="card-text decryption">{props1.desc1}</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
const Experiancecard2 = (props1) => {
  return (
    <>
    <div style={{position:"relative"}}>
    <div className="card expcard2" id = 'cardid' >
        <img src={props1.img1}  style={{height:"79px",width:"79px"}} className="card-img-top expcrdimg1" alt="..." />
        <div className="card-body ">
          <h1 className="card-title " style={{textAlign:"left",marginTop:"-6rem"}}>{props1.bar}</h1>
          <div className='experiancecrd'>
          <img src={props1.box} style={{height:"28px",width:"7px",paddingLeft:"-3rem"}} class="card-img-top" alt="..." />
          <p class="card-text decryption">{props1.desc1}</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
const Experiancecard3 = (props1) => {
  return (
    <>
    <div style={{position:"relative"}}>
    <div className="card expcard3" id = 'cardid' >
        <img src={props1.img1}  style={{height:"79px",width:"79px"}} className="card-img-top expcrdimg3" alt="..." />
        <div className="card-body ">
          <h1 className="card-title " style={{textAlign:"left",marginTop:"-6rem"}}>{props1.bar}</h1>
          <div className='experiancecrd'>
          <img src={props1.box} style={{height:"28px",width:"7px",paddingLeft:"-3rem"}} class="card-img-top" alt="..." />
          <p class="card-text decryption">{props1.desc1}</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Experiancecard
export {Experiancecard1, Experiancecard2, Experiancecard3}