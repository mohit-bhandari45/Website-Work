import React from 'react';

const Navbar = ({ title }) => {
    return (
        <div className='navbar flex justify-between items-center px-6 md:px-28 h-[15vh] md:h-[25vh] w-full font-[Helvetica]'>
            <div className="contact flex justify-center items-center text-2xl md:text-4xl font-bold">
                {title}
            </div>
            <div className="buttons text-lg md:text-xl flex gap-4 md:gap-10">
                <button className="font-medium hidden md:inline-block">Login</button>
                <button className="border-2 rounded-full px-4 py-2 md:px-8 md:py-2 border-[#ec8a73] text-[#ec8a73] flex justify-center items-center">Sign Up</button>
            </div>
        </div>
    );
}

export default Navbar;
