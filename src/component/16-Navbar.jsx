import React from 'react'
import { memo } from 'react'

// with function as a prop

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
      I am a {adjective} Navbar
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}


// without funnction as a prop

// const Navbar = ({adjective}) => {
//   console.log("Navbar is rendered")
// return (
//   <div>
//     I am a {adjective} Navbar
//   </div>
// )
// }

// memo allows the component to re render only when its props gets chagned.
export default memo(Navbar)
// export default Navbar