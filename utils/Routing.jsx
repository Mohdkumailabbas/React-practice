import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import User from '../src/Components/User'
import Home from '../src/Components/Home'
import About from '../src/Components/About'

function Routing() {
  return (
 <div>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/User' element={<User/>} />
       <Route path='/About' element={<About/>} />
        
       
     </Routes>
 </div>
  )
}

export default Routing