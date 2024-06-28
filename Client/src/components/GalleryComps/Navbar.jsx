import React from 'react'
import { NavLink } from 'react-router-dom'
import { getLogo } from '../../apis/apis'

const Navbar = () => {
  return (
    <div className='h-[20vh] flex justify-start items-center py-2 px-10'>
      <NavLink to="/"><img className='h-[70%] w-[13vw]' src={getLogo} alt="" /></NavLink>
    </div>
  )
}

export default Navbar
