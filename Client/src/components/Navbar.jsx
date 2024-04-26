import React, { useState, useEffect } from 'react'

const Navbar = () => {

  return (
    <>
      <div className='navbar flex justify-between items-center px-24 h-[25vh]'>
        <div className="logo flex justify-center items-center">
          <a href="/"><img className='opacity-50 w-[100px] h-[100px]' src="icons/logo.png" alt="" /></a>
        </div>
        <ul className='flex justify-center items-center gap-16 text-xl font-sans'>
          <li>Catalog</li>
          <li>Gallery</li>
          <li>About Us</li>
          <li>Contacts</li>
        </ul>
        <div className="buttons text-xl font-sans flex gap-10">
          <button className="">Login</button>
          <button className="border-2 rounded-full px-7 py-2 border-[#ec8a73] text-[#ec8a73] flex justify-center items-center">Sign Up</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
