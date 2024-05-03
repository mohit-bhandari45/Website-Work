import React from 'react'

const Search = () => {
    return (
        <>
            <div className="main w-full h-[20vh] flex justify-center items-center font-[Helvetica]">
                <div className='inputs w-[80%] border-[2px] border-gray-600 h-[40%] flex justify-between items-center rounded-2xl px-2'>
                    <div className="inputs w-full h-full pl-4">
                        <input className='focus:outline-none text-xl w-[98%] bg-transparent placeholder:text-xl h-full flex justify-center items-center' type="text" placeholder='Kalighat Pot Art' />
                    </div>
                    <div className="elements flex justify-center items-center gap-2">
                        <div className="gal bg-blue-300 rounded-xl p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' viewBox="0 0 24 24" width="34" height="34" color="#000000" fill="none">
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" />
                                <circle cx="16.5" cy="7.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
                                <path d="M16 22C15.3805 19.7749 13.9345 17.7821 11.8765 16.3342C9.65761 14.7729 6.87163 13.9466 4.01569 14.0027C3.67658 14.0019 3.33776 14.0127 3 14.0351" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                <path d="M13 18C14.7015 16.6733 16.5345 15.9928 18.3862 16.0001C19.4362 15.999 20.4812 16.2216 21.5 16.6617" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="btn">
                            <button className='font-bold text-white bg-[#2E93A9] px-4 py-2 rounded-2xl cursor-pointer'>SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
