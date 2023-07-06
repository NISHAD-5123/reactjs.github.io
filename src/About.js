import React from 'react'
import './index.css';
import './about.css';
import Card from './Card';
import Common from './Common';
import images from './images/img1.svg'
import TeamMember from './TeamMember';
import './about.css';
const About = () => {
  const card = (val)=>{
    return ( 
      <>
      <div className='shift-right container d-flex justify-content-between align-items-center mt-2 mb-5 Flex'>
      <Card
      key= {val.id}
      imgsrc  = {val.imgsrc}
      title = {val.title}
      text = {val.text}
      />
      </div>
      </> 
    )
  }
  return (
  <>
  <Common 
  name=" Welcome to About page" 
  brandName="Arun Technical"
  btn="Get Home"
  img = {images}/>

  <h1 class="text-center text-primary mb-4">Our Team Member</h1>
  {TeamMember.map(card)}
  </>

  )
}

export default About;