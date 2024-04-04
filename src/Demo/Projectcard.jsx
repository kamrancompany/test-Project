import React from 'react'

const Projectcard = (props1) => {
  return (
    <>
      <div class="card" id = 'cardid' style={{ width: '100%' }}>
        <img src={props1.img1} class="card-img-top" alt="..." />
        <div class="card-body cardrbody text-center">
          <h5 class="card-title projecttitle">{props1.tile1}</h5>
          <p class="card-text projectcontent">{props1.desc1}</p>

        </div>
      </div>
    </>
  )
}

export default Projectcard