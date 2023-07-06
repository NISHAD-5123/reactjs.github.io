import React from 'react'
import {NavLink} from 'react-router-dom'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
const FeatureHome = () => {
  return (
    <>
    <div className='UniversityList my-5'>
    <h4 class="text-center text-capitalize text-primary mb-5">Features with which we collaborates and hearty  congratulates</h4>
    <div className='logo mt-5 mx-auto'>
    <NavLink><img src={img5} alt="logo"/></NavLink>
    <NavLink><img src={img6} alt="logo"/></NavLink>
    <NavLink><img src={img7} alt="logo"/></NavLink>
    {/* <NavLink><img src={img8} alt="logo"/></NavLink> */}
    <NavLink><img src={img5} alt="logo"/></NavLink>
    <NavLink><img src={img6} alt="logo"/></NavLink>
    <NavLink><img src={img7} alt="logo"/></NavLink>
    <NavLink><img src={img8} alt="logo"/></NavLink>
    {/* <NavLink><img src={img5} alt="logo"/></NavLink> */}
    </div>
    </div>
    </>
  )
}

export default FeatureHome;