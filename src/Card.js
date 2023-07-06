import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import './index.css'
const Card = (props) => {
  return (
    <>

<div class="card mb-5" key={props.key}>
  <img src={props.imgsrc} class="card-img-top" alt="Fissure in Sandstone"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
   <NavLink to="/" class="btn btn-primary"> <Button variant="contained">Check Out</Button></NavLink>
  </div>
  </div>
    </>
  )
}

export default Card;