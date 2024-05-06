import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='h-[50vh] pb-14 flex flex-col justify-end items-center font-[Helvetica] gap-20'>
                <div className="first font-bold text-3xl flex flex-col gap-1">
                    <div className='flex justify-center items-center gap-8'>
                        <div>CONTACT US </div>
                        <div>REFUND AND RETURN POLICY </div>
                        <div>COLLABORATION</div>
                    </div>
                    <div className='flex justify-center items-center gap-8'>
                        <div>ARTIST'S POLICIES </div>
                        <div>MENTION</div>
                        <div>BLOG</div>
                        <div> ABOUT US</div>
                    </div>
                    <div className='text-center'>
                        PRIVACY POLICY
                    </div>
                </div>
            </div>
            <div className='h-[25vh] flex flex-col justify-center items-center font-[Helvetica] border-t-2 border-gray-400'>
                <div className='uppercase font-medium'>Copyright © 2024 ACRILC</div>
                <div className='uppercase font-medium'>All Rights Reserved Under ACRILC Artworks LLP</div>
                <div className='uppercase font-medium'>We Respect Your Privacy</div>
            </div>
        </>
    )
}

export default Footer
