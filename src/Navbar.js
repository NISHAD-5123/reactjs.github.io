import React from 'react'
import './index.css'
// import { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import image from './images/img4.jpg'

const Navbar = () => {
  // const [sticky, setSticky] = useState(false);
  // useEffect(()=>{
  //   const handleScroll = ()=>{
  //     setSticky(window.scrollY >= 70)
  //     // console.log(window.scrollY);
  //   }
  //   window.addEventListener("scroll", handleScroll);
  //   return ()=> window.removeEventListener("scroll", handleScroll);
  // })
  return (
    <>
    <nav class="navbar Header navbar-expand-lg sticky-top" > {/*id={`${sticky ? "sticky" : " "}`} */}
    <div class="container-fluid">
    <div><img className="Website_Logo" src={image} alt="Website Logo"/></div>
    <div class="navbar-brand" id="brand">&nbsp;&nbsp;Arun Technical</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink exact class="nav-link navbar-btn"  aria-current="page" to="/">&nbsp;&nbsp;Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink exact class="nav-link navbar-btn" aria-current="page" to="/about">&nbsp;&nbsp;About</NavLink>
        </li>
        <li class="nav-item">
        <NavLink exact class="nav-link navbar-btn" aria-current="page" to="/serve">&nbsp;&nbsp;service</NavLink>
        </li>
        <li class="nav-item">
        <NavLink exact class="nav-link navbar-btn" aria-current="page" to="/contact">&nbsp;&nbsp;contact</NavLink>
        </li>
        <li class="nav-item">
        <NavLink exact class="nav-link navbar-btn" aria-current="page" to="/signin">&nbsp;&nbsp;Log in</NavLink>
        </li>  
        <li class="nav-item signup">
        <NavLink exact class="nav-link navbar-btn" aria-current="page" to="/signup">&nbsp;&nbsp;Sign Up</NavLink>
        </li>      
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;