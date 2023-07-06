import React from 'react'
import './footer.css';
import { NavLink } from 'react-router-dom';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <>
    <div className='Footer'>
        <div className='Section_one common'>
            <ul>
                <li className='Heading'><p>Popular Topic</p></li>
                <li><NavLink to="/">Accounting</NavLink></li>
                <li><NavLink to="/">Data Analysis</NavLink></li>
                <li><NavLink to="/">Machine Learning</NavLink></li>
                <li><NavLink to="/">Data Science</NavLink></li>
                <li><NavLink to="/">Cybersecurity</NavLink></li>
            </ul>
        </div>
        <div className='Section_two common'>
             <ul>
                <li className='Heading'><p>Certificates</p></li>
                <li><NavLink to="/">Google Data Analytics</NavLink></li>
                <li><NavLink to="/">Google IT Support</NavLink></li>
                <li><NavLink to="/">Google UX Design</NavLink></li>
                <li><NavLink to="/">IBM Data Science</NavLink></li>
                <li><NavLink to="/">Project Management</NavLink></li>
            </ul>
        </div>
        <div className='Section_three common'>
            <ul>
                <li className='Heading'><p>Social Link</p></li>
                <li><NavLink to="/">
                <MDBBtn size="sm" className='me-2'  href='#'>
                <MDBIcon fab icon='facebook' />
                </MDBBtn>Facebook</NavLink></li>
                <li><NavLink to="/"> <MDBBtn size="sm" className='me-2' style={{ backgroundColor: '#25d366' }} href='#'>
                <MDBIcon fab icon='whatsapp' />
                </MDBBtn>Whatsapp</NavLink></li>
                <li><NavLink to="/"> <MDBBtn size="sm" className='me-2'  style={{ backgroundColor: '#0082ca' }} href='#'>
                <MDBIcon fab icon='linkedin' />
                </MDBBtn>Linkedin</NavLink></li>
                <li><NavLink to="/"> <MDBBtn size="sm" className='me-2' style={{ backgroundColor: '#ac2bac' }} href='#'>
                <MDBIcon fab icon='instagram' />
                </MDBBtn>Instagram</NavLink></li>
                <li><NavLink to="/"> <MDBBtn size="sm" className='me-2' style={{ backgroundColor: '#55acee' }} href='#'>
                <MDBIcon fab icon='twitter' />
                </MDBBtn>Twitter</NavLink></li>
            </ul>
        </div>
        <div className='Section_four common'>
            <ul>
                <li className='Heading'><p>Articles</p></li>
                <li><NavLink to="/">A Comprehensive Guide to Becoming a Data Analyst</NavLink></li>
                <li><NavLink to="/">Learn How to Become PMP Certified</NavLink></li>
                <li><NavLink to="/">Start Your Career with CAPM Certification</NavLink></li>
                <li><NavLink to="/">Unlock Your Potential with a PMI Certification</NavLink></li>
                <li><NavLink to="/">Get Your Data Analytics Certification</NavLink></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Footer;