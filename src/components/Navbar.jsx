import React, { useState,useEffect } from 'react'
import Login from './Login'

const Navbar = () => {
  const [bool1, setbool1] = useState(false)
  const [visiblemain1, setvisiblemain1] = useState(false)
  const [visiblemain2, setvisiblemain2] = useState(false)

  
  const handleLogin=() => {
    setbool1(true)
    setvisiblemain1(true)
  }
  const handleSignup=() => {
    setbool1(true)
    setvisiblemain2(true)
  }
  
  return (
    <>
    <div className='navbar flex justify-between items-center px-24 h-[25vh]'>
      <div className="logo">
        <img className='opacity-50 w-[100px] h-[100px]' src="icons/logo.png" alt="" />
        {/* <img src="icons/WhatsApp Image 2024-03-18 at 22.38.31_34935959.jpg" alt="" /> */}
      </div>
      <ul className='flex justify-center items-center gap-16 text-xl font-sans'>
        <li>Catalog</li>
        <li>Gallery</li>
        <li>About Us</li>
        <li>Contacts</li>
      </ul>
      <div className="buttons text-xl font-sans flex gap-10">
        <button onClick={handleLogin} className={bool1?"translate-y-[150px] translate-x-[-650px] transition-all duratin-150 opacity-0":""}>Login</button>
        <button onClick={handleSignup} className={bool1?"border-2 rounded-full px-7 py-2 border-[#ec8a73] text-[#ec8a73] flex justify-center items-center transition-all duratin-150 opacity-0":"border-2 rounded-full px-7 opacity-100 py-2 border-[#ec8a73] text-[#ec8a73] flex justify-center items-center transition-all duration-150"}>Sign Up</button>
      </div>
    </div>
    <Login visible1={visiblemain1} visible2={visiblemain2}/>
    </>
  )
}

export default Navbar
