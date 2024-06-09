import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='h-[30vh] w-full flex flex-col justify-center items-center font-[Helvetica] gap-5'>
            <div className="logo">
                <NavLink to="/"><img className='w-[20vw] h-[20vh]' src="src/assets/acrilc logo-09.png" alt="" /></NavLink>
            </div>
            <div className="elements w-full flex justify-between items-center px-20">
                <div className="left"><img src="src/assets/go back.png" alt="" /></div>
                <div className="text text-5xl font-bold">Shopping Cart</div>
                <div className="right"><img className='w-[2.9vw] h-[7vh]' src="src/assets/cart.png" alt="" /></div>
            </div>
        </div>
    )
}

export default Navbar
