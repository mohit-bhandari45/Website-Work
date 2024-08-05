import React from 'react'
import { Link } from 'react-router-dom'
import { useBooleanContext } from '../../context/context'

const Navbar = ({ title }) => {
    const { token } = useBooleanContext()

    return (
        <div className='navbar flex justify-between items-center px-6 lg:px-16 h-[23vh] w-full font-[Helvetica]'>
            <div className="contact flex justify-center items-center text-4xl font-bold">
                {title}
            </div>
            {token ? <Link className='rounded-full border-2 border-black p-2' to="/userprofile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#18122b" fill="none">
                    <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" stroke-width="2" />
                </svg></Link> : <div className="buttons text-xl md:flex gap-10 hidden">
                <button className="font-medium">Login</button>
                <button className="border-2 rounded-full px-8 py-2 border-[#ec8a73] text-[#ec8a73] flex justify-center items-center">Sign Up</button>
            </div>}

        </div>
    )
}

export default Navbar
