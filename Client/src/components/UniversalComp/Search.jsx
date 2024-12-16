import React from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
    return (
        <>
            <div className="main w-full h-[20vh] flex justify-center items-center font-[Helvetica]">
                <div className='inputs w-[80%] border-[2px] border-gray-600 h-[40%] flex justify-between items-center rounded-2xl px-2'>
                    <div className="inputs w-full h-full pl-4">
                        <input className='focus:outline-none text-xl w-[98%] bg-transparent placeholder:text-xl h-full flex justify-center items-center' type="text" placeholder='Kalighat Pot Art' />
                    </div>
                    <div className="elements flex justify-center items-center gap-2">
                        <div className="gal bg-blue-100 rounded-xl p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" color="#000000" fill="none">
                                <path d="M13 3.00231C12.5299 3 12.0307 3 11.5 3C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C20.9472 19.2703 20.998 17.147 20.9999 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M2 14.1354C2.61902 14.0455 3.24484 14.0011 3.87171 14.0027C6.52365 13.9466 9.11064 14.7729 11.1711 16.3342C13.082 17.7821 14.4247 19.7749 15 22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                <path d="M21 16.8962C19.8246 16.3009 18.6088 15.9988 17.3862 16.0001C15.5345 15.9928 13.7015 16.6733 12 18" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                <path d="M17 4.5C17.4915 3.9943 18.7998 2 19.5 2M22 4.5C21.5085 3.9943 20.2002 2 19.5 2M19.5 2V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="btn">
                            <Link to="/404"><button className='font-bold text-white bg-[#2E93A9] px-4 py-2 rounded-xl cursor-pointer'>SEARCH</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
