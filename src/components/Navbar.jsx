import React, { useState,useEffect } from 'react'
import Login from './Login'

const Navbar = () => {
  const [Signupop, setSignup] = useState(false)
  const [Loginop, setLogin] = useState(false)
  const [visible, setvisible] = useState(false)
  const [logfun, setlogfun] = useState("")
  const [signfun, setsignfun] = useState("border-2 rounded-full px-7 opacity-100 py-2 border-[#ec8a73] text-[#ec8a73] flex justify-center items-center transition-all duratin-150")

  
  const handleLogin=() => {
    setLogin(true)
    setSignup(false)
    setvisible(true)
    setlogfun("translate-y-[150px] translate-x-[-650px] transition-all duratin-150 opacity-0")
    setsignfun("border-2 rounded-full px-7 py-2 border-[#ec8a73] text-[#ec8a73] flex justify-center items-center opacity-0")
  }
  const handleSignup=() => {
    setLogin(false)
    setSignup(true)
    setvisible(true)
    setsignfun("border-2 rounded-full px-7 py-2 border-[#ec8a73] text-[#ec8a73] flex justify-center items-center transition-all duratin-150 opacity-0")
    setlogfun("translate-y-[150px] translate-x-[-650px] transition-all duratin-150 opacity-0")
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
        <button onClick={handleLogin} className={logfun}>Login</button>
        <button onClick={handleSignup} className={signfun}>Sign Up</button>
      </div>
    </div>
    <Login sign={Signupop} log={Loginop} visible={visible}/>
    </>
  )
}

export default Navbar
