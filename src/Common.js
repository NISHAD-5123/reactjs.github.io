import React from 'react'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from 'react-router-dom';

const Common = (props) => {
  return (
    <>
    <div className='container-fluid Home'>
        <div className='row'>
            <div className='col-10 d-flex align-items-center justify-content-between mx-auto Flex-1'>
                <div className='d-flex flex-column g-2'>
                    <h2>
                        {/* Welcome to Home Webpage */}{props.name}
                    </h2>
                    <h1 className='brand-name'>
                        {/* Arun Technical */}{props.brandName}
                    </h1>
                    <div className='btn-get-started'>
                        <NavLink href="/">
                            {/* Get Started */}{props.btn}
                        </NavLink>                
                    </div>
                </div>
                <div className=''>
                    <img src={props.img} alt="home" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Common;