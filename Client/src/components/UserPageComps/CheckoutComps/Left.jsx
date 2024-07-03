import React from 'react'

const Left = () => {
    return (
        <div className="left w-1/2 h-full font-[Helvetica]">
            <h1 className='font-bold text-4xl'>Billing Details</h1>
            <div className="form w-full py-8">
                <form className='w-full flex flex-col justify-center items-start gap-6'>
                    <div className="first w-full flex flex-col justify-center gap-1">
                        <div className="title text-gray-500 font-medium">First Name*</div>
                        <div className="input"><input type="text" name="firstname" id="" className='w-[70%] h-12 rounded-md bg-[#F5F5F5]' /></div>
                    </div>
                    <div className="second w-full flex flex-col justify-center gap-1">
                        <div className="title text-gray-500 font-medium">Company Name</div>
                        <div className="input"><input type="text" name="companyname" id="" className='w-[70%] h-12 rounded-md bg-[#F5F5F5]' /></div>
                    </div>
                    <div className="third w-full flex flex-col justify-center gap-1">
                        <div className="title text-gray-500 font-medium">Street Address</div>
                        <div className="input"><input type="text" name="streetaddress" id="" className='w-[70%] h-12 rounded-md bg-[#F5F5F5]' /></div>
                    </div>
                    <div className="fourth w-full flex flex-col justify-center gap-1">
                        <div className="title text-gray-500 font-medium">Apartment, floor, etc. (optional)</div>
                        <div className="input"><input type="text" name="apartment" id="" className='w-[70%] h-12 rounded-md bg-[#F5F5F5]' /></div>
                    </div>
                    <div className="fifth w-full flex flex-col justify-center gap-1">
                        <div className="title text-gray-500 font-medium">Town/City*</div>
                        <div className="input"><input type="text" name="area" id="" className='w-[70%] h-12 rounded-md bg-[#F5F5F5]' /></div>
                    </div>
                    <div className="sixth w-full flex flex-col justify-center gap-1">
                        <div className="title text-gray-500 font-medium">Phone Number*</div>
                        <div className="input"><input type="number" name="number" id="" className='w-[70%] h-12 rounded-md bg-[#F5F5F5]' /></div>
                    </div>
                    <div className="sixth w-full flex flex-col justify-center gap-1">
                        <div className="title text-gray-500 font-medium">Email Address*</div>
                        <div className="input"><input type="email" name="email" id="" className='w-[70%] h-12 rounded-md bg-[#F5F5F5]' /></div>
                    </div>
                    <div className="seventh w-full flex gap-3 items-center">
                        <div className="input"><input type="checkbox" name="" id="" /></div>
                        <div className="title text-black font-medium">Save this information for faster check-out next time</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Left
