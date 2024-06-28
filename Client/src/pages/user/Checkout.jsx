import React from 'react'
import Navbar from '../../components/UserPageComps/UniversalComps/Navbar'
import Footer from '../../components/UniversalComp/Footer'
import Left from '../../components/UserPageComps/CheckoutComps/Left'
import Right from '../../components/UserPageComps/CheckoutComps/Right'


const Checkout = () => {
    return (
        <>
            <Navbar />
            <div className="body w-full h-[140vh] flex justify-center items-center mb-32">
                <div className="main w-[85vw] h-full">
                    <div className="nav2 h-[25vh] flex justify-between items-center">
                        <div className="path">
                            <span className='font-[Helvetica] text-gray-400'>Account</span>
                            <span className='px-2 text-gray-400'> / </span>
                            <span className='font-[Helvetica] text-gray-400'>My Account</span>
                            <span className='px-2 text-gray-400'> / </span>
                            <span className='font-[Helvetica] text-gray-400'>Product</span>
                            <span className='px-2 text-gray-400'> / </span>
                            <span className='font-[Helvetica] text-gray-400'>View Cart</span>
                            <span className='px-2 text-gray-400'> / </span>
                            <span className='font-semibold font-[Helvetica]'>My Account</span>
                        </div>
                    </div>
                    <div className="content w-full h-[115vh] flex justify-start items-start">
                        <Left />
                        <Right />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout
