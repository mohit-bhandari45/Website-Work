import React from 'react';
import { getLogo } from '../../../apis/apis';
import profile from "../../../assets/User_alt_fill.png";
import WishList from "../../../assets/Wishlist.png"
import Cart from "../../../assets/Cart1 with buy.png"
import Search from "../../../assets/Component 2.png"

const Navbar = () => {
    return (
        <div className="nav w-full h-[15vh] px-4 py-3 flex flex-col md:flex-row justify-between items-center border-b-2 border-opacity-20 border-black font-[Helvetica]">
            {/* Logo */}
            <div className="logo flex items-center">
                <img className='w-24 h-12 md:w-32 md:h-16' src={getLogo} alt="Logo" />
            </div>
            
            {/* Search Input and Icons */}
            <div className="flex items-center gap-4 mt-4 md:mt-0 flex-grow md:flex-grow-0">
                {/* Search Input */}
                <div className="input flex items-center bg-[#F5F5F5] rounded-md px-2 w-full max-w-xs md:max-w-sm h-10">
                    <input 
                        type="text" 
                        className='w-full pl-2 bg-transparent h-full focus:border-none focus:outline-none'
                        placeholder='What are you looking for?' 
                    />
                    <img className='h-6 ml-2' src={Search} alt="Search Icon" />
                </div>
                
                {/* Icons */}
                <div className="icons flex items-center gap-4">
                    <div className="wish">
                        <img className='h-6 md:h-8 w-14' src={WishList} alt="Wishlist" />
                    </div>
                    <div className="cart">
                        <img className='h-6 md:h-8 w-14' src={Cart} alt="Cart" />
                    </div>
                    <div className="account bg-black p-1 rounded-full">
                        <img className='invert h-6 md:h-8 w-14' src={profile} alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
