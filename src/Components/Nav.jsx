import React from 'react'
import {Link, NavLink} from "react-router-dom"
function Nav() {
  return (
    <div>
    <nav className='gap-10 font-semibold flex capitalize justify-center'>
        <NavLink style={(e)=>{
            return{
                color:e.isActive ? "red" :" "
            }
        }} 
        className=' hover:text-red-800' to="/">home</NavLink>
        <NavLink className={(e)=>{
            return[
                e.isActive ? "text-red-300":""
            ]
        }}
         to="/user">user</NavLink>
        <NavLink style={(e)=>{
            return{
                color:e.isActive ? "red" :" ",
                fontWeight:e.isActive ? "bold" :""
            }
        }}
         className=' hover:text-red-800' to="/about">about</NavLink>
      </nav>
    </div>
  )
}

export default Nav