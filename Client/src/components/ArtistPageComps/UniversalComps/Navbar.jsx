import React, { useState } from 'react'
import Logo from "./acrilc logo-09 1.png"
import { Button } from "../../ui/button"
import { Link } from "react-router-dom"

const Navbar = ({ sign }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='w-full h-[10vh] relative z-20 bg-[#BEC6A0] flex justify-between items-center px-4 md:px-10 font-[Helvetica]'>
      <div className="logo">
        <Link to="/home"><img className='w-[70%]' src={Logo} alt="Logo" /></Link>
      </div>
      <div className="flex items-center ">
        <div className="hidden lg:flex items-center gap-8 mr-8 font-semibold">
          <div className='text-black'><Link to="/dashboard">Dashboard</Link></div>
          <div className='text-black'><Link to="/product-list">Product Listing</Link></div>
          <div className='text-black'><Link to="/blogs-posts">Blogs</Link></div>
          <div className='text-black'><Link to="/about">About</Link></div>
          <div className='text-black'><Link to="/contact">Contact</Link></div>
        </div>
        {sign && <Button>Sign Up</Button>}
        <button onClick={toggleMenu} className="ml-4 lg:hidden">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 w-64 z-50 bg-gray-800 p-4 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col gap-4 mt-12 pl-2 font-semibold">
          <div className='text-white'>Dashboard</div>
          <div className='text-white'>Product Listing</div>
          <div className='text-white'>Blogs</div>
          <div className='text-white'>About</div>
          <div className='text-white'>Contact</div>
        </div>
      </div>
    </nav>
  )
}

const div = ({ text, mobile }) => (
  <div className={`text-white cursor-pointer ${mobile ? 'text-lg' : ''}`}>
    {text}
  </div>
)

export default Navbar