import React from 'react';
import deliveryIcon from "../../assets/icon-delivery.png";
import customerIcon from "../../assets/Icon-Customer service.png";
import secureIcon from "../../assets/Icon-secure.png";

const SubFooter = () => {
  return (
    <div className='h-[120vh] md:h-[50vh] xl:h-[70vh] flex flex-col md:flex-row justify-center items-center font-[Helvetica] gap-24 md:gap-20 xl:gap-32 p-5'>
      <div className="first flex flex-col justify-center items-center gap-5 text-center">
        <div className="logo p-6 md:p-4 bg-gray-300 rounded-full">
          <div className="circle p-6 md:p-4 bg-black rounded-full">
            <img className='w-16 h-16 md:w-10 md:h-10' src={deliveryIcon} alt="Delivery Icon" />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className="title uppercase font-bold text-xl md:text-lg xl:text-2xl">Free and fast delivery</div>
          <div className='font-medium text-sm md:text-xs xl:text-base'>Free delivery for all orders over $140</div>
        </div>
      </div>
      <div className="second flex flex-col justify-center items-center gap-5 text-center">
        <div className="logo p-6 md:p-4 bg-gray-300 rounded-full">
          <div className="circle p-6 md:p-4 bg-black rounded-full">
            <img className='w-16 h-16 md:w-10 md:h-10' src={customerIcon} alt="Customer Service Icon" />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className="title uppercase font-bold text-xl md:text-lg xl:text-2xl">24/7 Customer Service</div>
          <div className='font-medium text-sm md:text-xs xl:text-base'>Friendly 24/7 customer support</div>
        </div>
      </div>
      <div className="third flex flex-col justify-center items-center gap-5 text-center">
        <div className="logo p-6 md:p-4 bg-gray-300 rounded-full">
          <div className="circle p-6 md:p-4 bg-black rounded-full">
            <img className='w-16 h-16 md:w-10 md:h-10' src={secureIcon} alt="Secure Icon" />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className="title uppercase font-bold text-xl md:text-lg xl:text-2xl">Money Back Guarantee</div>
          <div className='font-medium text-sm md:text-xs xl:text-base'>We return money within 30 days</div>
        </div>
      </div>
    </div>
  );
}

export default SubFooter;
