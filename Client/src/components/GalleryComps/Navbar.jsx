import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[20vh] flex justify-start items-center py-2 px-10'>
      <NavLink to="/"><img className='h-[70%] w-[13vw]' src="src/assets/acrilc logo-09.png" alt="" /></NavLink>
    </div>
  )
}

export default Navbar
