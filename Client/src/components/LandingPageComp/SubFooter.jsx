import React from 'react'

const SubFooter = () => {
    return (
        <div className='h-[100vh] flex justify-center items-center font-[Helvetica] gap-32'>
            <div className="first flex flex-col justify-center items-center gap-5">
                <div className="logo p-6 bg-gray-300 rounded-full">
                    <div className="circle p-6 bg-black rounded-full">
                        <img className='w-16 h-16' src="src/assets/icon-delivery.png" alt="" />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className="title uppercase font-bold text-2xl">Free and fast delivery</div>
                    <div className='font-medium'>Free delivery for all orders over $140</div>
                </div>
            </div>
            <div className="second flex flex-col justify-center items-center gap-5">
                <div className="logo p-6 bg-gray-300 rounded-full">
                    <div className="circle p-6 bg-black rounded-full">
                        <img className='w-16 h-16' src="src/assets/Icon-Customer service.png" alt="" />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className="title uppercase font-bold text-2xl">24/7 CUSTOMER SERVICE</div>
                    <div className='font-medium'>Friendly 24/7 customer support</div>
                </div>
            </div>
            <div className="third flex flex-col justify-center items-center gap-5">
                <div className="logo p-6 bg-gray-300 rounded-full">
                    <div className="circle p-6 bg-black rounded-full">
                        <img className='w-16 h-16' src="src/assets/Icon-secure.png" alt="" />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className="title uppercase font-bold text-2xl">MONEY BACK GUARANTEE</div>
                    <div className='font-medium'>We reurn money within 30 days</div>
                </div>
            </div>
            
        </div>
    )
}

export default SubFooter
