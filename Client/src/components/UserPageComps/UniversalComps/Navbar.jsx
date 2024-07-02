import React from 'react'
import { getLogo } from '../../../apis/apis'
import profile from "../../../assets/User_alt_fill.png"

const Navbar = () => {
    return (
        <div className="nav w-full h-[15vh] px-16 py-3 flex justify-between items-end border-b-2 border-opacity-20 border-black font-[Helvetica]">
            <div className="logo"><img className='w-32 h-16' src={getLogo} alt="" /></div>
            <div className="elements flex justify-center items-center gap-4">
                <div className="input flex justify-center items-center bg-[#F5F5F5] rounded-sm px-2 w-72 h-10">
                    <input type="text" className='w-full pl-1 bg-transparent h-full focus:border-none focus:outline-none' placeholder='What are you looking for?' name="" id="" />
                    <img className='h-6' src="src/assets/Component 2.png" alt="" />
                </div>
                <div className="wish"><img src="src/assets/Wishlist.png" alt="" /></div>
                <div className="cart"><img src="src/assets/Cart1 with buy.png" alt="" /></div>
                <div className="account bg-black p-1 rounded-full"><img className='invert h-6' src={profile} alt="" /></div>
            </div>
        </div>
    )
}

export default Navbar