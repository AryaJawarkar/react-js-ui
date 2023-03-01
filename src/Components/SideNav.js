import React from 'react'
import Vector from '../assets/Vector.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'



const SideNav = () => {
  return (
    <aside className='nav-god'>
    <div className='nav-logo'>
    <img  src={Vector} alt="nav logo" />
    </div>
      <nav>
<ul className='main-nav'>
    <li className='nav-item'>
        <img src={img1} alt="" />
        <p>NEW</p>
    </li>
    <li className='nav-item'>
        <img src={img2} alt="" />
        <p>PATIENT</p>
    </li>
    <li className='nav-item'>
        <img src={img4} alt="" />
        <p>FOLDER</p>
    </li>
    <li className='nav-item'>
        <img src={img5} alt="" />
        <p>UPLOAD</p>
    </li>
    <li className='nav-item'>
        <img src={img6} alt="" />
        <p>REPORT</p>
    </li>
    <li className='nav-item'>
        <img src={img7} alt="" />
        <p>SETTING</p>
    </li>
    <li className='nav-item'>
        <img src={img3} alt="" />
        <p>LOGOUT</p>
    </li>
</ul>
      </nav>
    </aside>
  )
}

export default SideNav
