import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './Home'
import About from './About'
import Signin from './Singin'
import Signup from './Signup'
import Contact from './Contact'
import Serve from './Serve'
import Navbar from './Navbar'
import Footer from './Footer'
import './index.css'
import {Routes, Route} from 'react-router-dom'


const  App = () => {
  return (
    <>
<Navbar />
<Routes>
  <Route exact path="/" Component={Home}>  </Route>
  <Route exact path="/about" Component={About}>  </Route>
  <Route exact path="/serve" Component={Serve}>  </Route>
  <Route exact path="/contact" Component={Contact}>  </Route>
  <Route exact path="/signin" Component={Signin}>  </Route>
  <Route exact path="/signup" Component={Signup}>  </Route>
</Routes> 
<Footer />
</>
  )
}

export default App;