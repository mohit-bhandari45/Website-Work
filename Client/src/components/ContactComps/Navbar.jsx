import React from 'react'

const Navbar = ({title}) => {
    return (
        <div className='navbar flex justify-between items-center px-28 h-[25vh] w-full font-[Helvetica]'>
            <div className="contact flex justify-center items-center text-4xl font-bold">
                {title}
            </div>
            <div className="buttons text-xl md:flex gap-10 hidden">
                <button className="font-medium">Login</button>
                <button className="border-2 rounded-full px-8 py-2 border-[#ec8a73] text-[#ec8a73] flex justify-center items-center">Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar
