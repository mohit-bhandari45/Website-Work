import React from 'react'
import { NavLink } from 'react-router-dom'

/* APIs */
import { getLogo } from "../../../apis/apis"

const Navbar = () => {
    return (
        <div className='h-[20vh] xl:h-[30vh] w-full flex flex-col justify-center items-center font-[Helvetica] gap-2 sm:gap-5 xl:gap-8 p-4'>
            <div className="logo">
                <NavLink to="/"><img className='w-[20vw] h-auto max-w-[200px] max-h-[100px]' src={getLogo} alt="" /></NavLink>
            </div>
            <div className="elements w-full flex flex-row justify-between items-center px-4 sm:px-12">
                <div className="left"><img className="w-8 h-2 sm:w-10 md:w-12 xl:w-16" src="src/assets/go back.png" alt="" /></div>
                <div className="text text-2xl sm:text-3xl xl:text-5xl font-bold my-4 sm:my-0">Shopping Cart</div>
                <div className="right"><img className='w-7 h-8 sm:w-10 sm:h-12' src="src/assets/cart.png" alt="" /></div>
            </div>
        </div>
    )
}

export default Navbar