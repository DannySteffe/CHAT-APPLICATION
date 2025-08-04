import React from 'react'
import './RightSideBar.css'
import assets from '../../assets/assets'

const RightSideBar = () => {
  return (
    <div className='rs'>
      <div className="rs-profile">
        <img src={assets.profile_img}/>
        <h3>Richard Sanford <img className='dot' src={assets.green_dot}/></h3>
        <p>Hey, there i am Richard sanford using chat app</p>
      </div>
      <hr />
      <div className="rs-media">
      <p>Media</p>
      <div>
        <img src={assets.pic1} alt="" />
        <img src={assets.pic2} alt="" />
        <img src={assets.pic3} alt="" />
        <img src={assets.piv4} alt="" />
        <img src={assets.pic1} alt="" />
        <img src={assets.pic2} alt="" />
      </div>
    </div>
    <button>Logout</button>
    </div>

  )
}

export default RightSideBar
