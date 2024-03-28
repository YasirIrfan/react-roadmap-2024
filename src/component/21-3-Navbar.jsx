import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/login"><li>Login</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/Filter"><li>Filter</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/Contact"><li>Contact</li></NavLink>
        {/* <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/user"><li>User</li></NavLink> */}

        {/* /user */}
      </nav>
    </div>
  )
}

export default Navbar
