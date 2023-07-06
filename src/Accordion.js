import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
const Accordion = (props) => {
    const [show , setShow] = React.useState(false);
        const expand = ()=>{
            setShow(!show);
        }

    return  (
    <>
     <div className='container'>
        <div className='row mx-auto'>
          <div className='col-10 mx-auto'>
             <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                      <button class="accordion-button mx-auto" type="button" onClick={expand}>{show ?<RemoveIcon/> :<AddCircleOutlineIcon/>}
                         &nbsp;&nbsp;{props.question}
                      </button>
                   </h2>
     
                  {
                    show ? 
                     <div class="accordion-collapse collapse show">
                    <div class="accordion-body" style={{backgroundColor:"#F0FFF0"}}>
                    {props.answer}
                    </div>
                    </div> : null
                  } 
          </div>
        </div>
      </div> 
   </div>
  </div>
    </>
    )
    
//    
//   return (
//     
// <div class="accordion" id="accordionExample">
//   <div class="accordion-item">
//     <h2 class="accordion-header" id="headingOne">
//       <button
//         class="accordion-button"
//         type="button"
//         onClick={expand}
//       >
//        {props.question}
//       </button>
//     </h2>
//     {
//      show ? <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
//       <div class="accordion-body">
//        {props.answer}
//       </div>
//     </div> : null
//     }
//     </div>
// </div>
}

export default Accordion;