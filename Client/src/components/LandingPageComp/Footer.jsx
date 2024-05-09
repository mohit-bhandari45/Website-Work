import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='h-[70vh] md:h-[50vh] flex flex-col justify-center items-center font-[Helvetica] gap-20'>
                <div className="first font-bold text-2xl xl:text-3xl flex flex-col md:gap-0 gap-10 px-5">
                    <div className='flex md:flex-row flex-col justify-center items-center gap-0 md:gap-5 xl:gap-8'>
                        <div>CONTACT US </div>
                        <div>REFUND AND RETURN POLICY </div>
                        <div>COLLABORATION</div>
                    </div>
                    <div className='flex md:flex-row flex-col justify-center items-center gap-2 xl:gap-8'>
                        <div>ARTIST'S POLICIES </div>
                        <div>MENTION</div>
                        <div>BLOG</div>
                        <div> ABOUT US</div>
                    </div>
                    <div className='text-center flex justify-center items-center'>
                        PRIVACY POLICY
                    </div>
                </div>
            </div>
            <div className='h-[15vh] md:h-[25vh] flex flex-col justify-center items-center font-[Helvetica] border-t-2 border-gray-400'>
                <div className='uppercase font-medium'>Copyright © 2024 ACRILC</div>
                <div className='uppercase font-medium'>All Rights Reserved Under ACRILC Artworks LLP</div>
                <div className='uppercase font-medium'>We Respect Your Privacy</div>
            </div>
        </>
    )
}

export default Footer
