import React from 'react'
import AccordionApi from './AccordionApi'
import Accordion from './Accordion'

const AccordionMap = () => {
        const Info  = (val,index)=>{
            return (
                <div className='mt-3'>
                <Accordion
                id={index}
                key = {val.id}
                question = {val.question}
                answer = {val.answer}
             />
            </div>
            )
        }    
  return (
   <>
     <div className='my-3'>
    <h1 className='text-center mx-auto'>Frequently Asked Question </h1>
  </div>
   <div className='mt-5'>
   {AccordionApi.map(Info)}
   </div>
   </>
  )
}

export default AccordionMap;