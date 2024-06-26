import React from 'react';

const SubFooter = () => {
    return (
        <div className='h-screen flex flex-col md:flex-row justify-center items-center font-[Helvetica] gap-8 md:gap-32 py-16'>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
                <div className="flex flex-col justify-center items-center gap-5 flex-1 text-center">
                    <div className="p-4 sm:p-6 bg-gray-300 rounded-full">
                        <div className="p-4 sm:p-6 bg-black rounded-full">
                            <img className='w-12 h-12 sm:w-16 sm:h-16' src="src/assets/icon-delivery.png" alt="Free and Fast Delivery"/>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className="uppercase font-bold text-lg sm:text-xl md:text-2xl">Free and fast delivery</div>
                        <div className='font-medium text-sm sm:text-base'>Free delivery for all orders over $140</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 flex-1 text-center">
                    <div className="p-4 sm:p-6 bg-gray-300 rounded-full">
                        <div className="p-4 sm:p-6 bg-black rounded-full">
                            <img className='w-12 h-12 sm:w-16 sm:h-16' src="src/assets/Icon-Customer service.png" alt="24/7 Customer Service"/>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className="uppercase font-bold text-lg sm:text-xl md:text-2xl">24/7 CUSTOMER SERVICE</div>
                        <div className='font-medium text-sm sm:text-base'>Friendly 24/7 customer support</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 flex-1 text-center">
                    <div className="p-4 sm:p-6 bg-gray-300 rounded-full">
                        <div className="p-4 sm:p-6 bg-black rounded-full">
                            <img className='w-12 h-12 sm:w-16 sm:h-16' src="src/assets/Icon-secure.png" alt="Money Back Guarantee"/>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className="uppercase font-bold text-lg sm:text-xl md:text-2xl">MONEY BACK GUARANTEE</div>
                        <div className='font-medium text-sm sm:text-base'>We return money within 30 days</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubFooter;
