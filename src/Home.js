import React from 'react'
import './index.css';
import './about.css'
import Common from './Common';
import images from './images/img2.svg'
import {NavLink} from 'react-router-dom'
import img from './images/img3.jpg'
import AccordionMap from './AccordionMap'
import FeatureHome from './FeatureHome';
const Home = () => {

  
  return (
   <>
   <Common 
 name=" Welcome to Home page" 
 brandName="Arun Technical"
 btn="Get Started"
 img = {images}/>

 <div className='UniversityList'>
  <h4 class="text-center text-capitalize text-primary mb-5 mx-auto">We collaborate with 300+ leading universities and companies</h4>
  <div className='logo mt-5 mx-auto'>
    <NavLink to="/"><img src={img} alt="logo"/>
    </NavLink>
    <NavLink to="/"><img src={img} alt="logo"/>
    </NavLink>
    <NavLink to="/"><img src={img} alt="logo"/>
    </NavLink>
    <NavLink to="/"><img src={img} alt="logo"/>
    </NavLink>
    <NavLink to="/"><img src={img} alt="logo"/>
    </NavLink>
    <NavLink to="/"><img src={img} alt="logo"/>
    </NavLink>
    <NavLink to="/"><img src={img} alt="logo"/>
    </NavLink>
    {/* <NavLink to="/"><img src={img} alt="logo"/>
    </NavLink> */}
  </div>
 </div>
 <FeatureHome />
 <br />
<AccordionMap />
   </>
  )
}

export default Home;