import React from 'react'
import './index.css';
import './about.css';
import ApiData from './ApiData';
import Card from './Card';

const card = (val)=>{
  return ( 
    <>
    <div className='shift-right container d-flex justify-content-between align-items-center mt-5 mb-5 Flex' >
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
const Serve = () => {
  const [searchItem , setSearchItem] =React.useState(''); 
  const Event = (obj)=>{
    setSearchItem(obj.target.value);
  }

  return (
   <>   
    <div className='text_data'>
   <input type="text" placeholder='Search...' value={searchItem} onChange={Event} />
   </div>
   <br />

  {
    ApiData.filter((data)=>{
      return data === '' ? data : data.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
    }).map(card)
   }
   
   </>
  )
}

export default Serve;