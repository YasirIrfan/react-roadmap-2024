import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        ,<h1>  Contact</h1>
        <Link to="Company "> Company </Link>
        <Link to="Channel" >Channel </Link>
        <Link to="Other" > Other</Link>
        <Outlet/>
    </div>
  )
}

export default Contact


