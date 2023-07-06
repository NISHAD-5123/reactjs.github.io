import React from 'react'
import './index.css'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom'
const Contact = () => {
  return (
    <>
<section class="mb-4">

    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
    <div class="row col-10 d-flex align-items-center mx-auto">
        <div class="col-md-6 mb-md-0 mb-5 mx-auto">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">            
                <div class="row ">                
                    <div class="col-md-6">
                    <div class="form-outline mb-5">
                    <input type="email" id="form2Example14" class="form-control"
                    style={{border:"1px solid grey",backgroundColor :"transparent"}}/>
                    <label class="form-label" for="form2Example14">Your Name</label>
                </div>
                    </div>                 
                    <div class="col-md-6">
                    <div class="form-outline mb-5">
                    <input type="text" id="form2Example13" class="form-control"
                    style={{border:"1px solid grey",backgroundColor :"transparent"}}/>
                    <label class="form-label" for="form2Example13">Your Email</label>
                  </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                    <div class="form-outline mb-5">
                    <input type="text" id="form2Example12" class="form-control"
                    style={{border:"1px solid grey",backgroundColor :"transparent"}}/>
                    <label class="form-label" for="form2Example12">Subject</label>
                    </div>
                    </div>
                </div>  

                <div class="row">                 
                    <div class="col-md-12">
                    <div class="form-outline mb-5">
                    <textarea type="text" id="form2Example11" rows="2" class="form-control md-textarea"
                    style={{border:"1px solid grey",backgroundColor :"transparent"}} />
                    <label class="form-label" for="form2Example11">Your message</label>
                </div>

                    </div>
                </div>              
            </form>
            <div class="">
            <NavLink to='/'><Button size="medium" variant='contained' className="px-5">Send</Button></NavLink>
            </div>
            <div class="status"></div>
        </div>
     
        <div class="col-md-3 text-center mx-auto">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Mumbai, Bandra 400102 INDIA</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 91 234 456 781 3</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>NishadArun9413@gmail.com</p>
                </li>
            </ul>
        </div>

    </div>

</section>

    </>
  )
}

export default Contact;