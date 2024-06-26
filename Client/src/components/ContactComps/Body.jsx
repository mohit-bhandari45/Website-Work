import React from 'react';
import { NavLink } from 'react-router-dom';

const Body = () => {

    const handleClick = () => {
        window.open("https://mail.google.com/mail/u/0/#inbox?compose=jrjtXMncSjWrhgQLSqkkKrvjtTflHZQXPBggfTnpxBBsPSgQjZxJBBDDlvlNztzTNHxsmpTq");
    }

    return (
        <div className='body flex flex-col lg:flex-row w-[100vw] h-auto lg:h-[75vh] gap-10 lg:gap-64 font-[Helvetica] relative justify-center px-6 lg:px-10 py-10'>
            <div className="content w-full lg:w-[35%] lg:pl-16 py-10 flex flex-col gap-4 lg:gap-1">
                <img className='w-full lg:w-[360px] h-auto lg:h-[130px] pl-0 lg:pl-6' src="src/assets/logo full.png" alt="" />
                <div className="para font-medium py-4 text-base lg:text-[20px] w-full lg:w-[500px] flex flex-col gap-0">
                    <span className='font-medium'>Your personalized e-commerce platform for artists! Explore a curated collection of art accessories and products, designed to inspire and</span>
                    <span className='font-medium'>empower your creativity.</span>
                </div>
                <div className="buttons flex flex-col lg:flex-row lg:pl-5 text-lg lg:text-xl gap-4 lg:gap-10">
                    <button onClick={handleClick} className='rounded-full px-9 py-3 bg-[#ec8a73] text-white flex justify-center items-center'>Email Us</button>
                    <button className='underline font-medium'><NavLink to="/showmore">Show More</NavLink></button>
                </div>
                <div className="whatsapp w-full lg:w-[110%] mt-4 lg:mt-0">
                    <button className='rounded-full w-full lg:w-[95%] px-7 mt-3 py-3 bg-[#66CF78] text-white flex justify-start items-center gap-5'>
                        <div className="icon">
                            <img className='w-[30px] h-[30px]' src="src/assets/whatsapp-logo-variant 1.png" alt="" />
                        </div>
                        <div className="text font-bold text-lg lg:text-xl">Connect us through WhatsApp</div>
                    </button>
                </div>
            </div>
            <div className="image relative pt-10 lg:pt-0 w-full lg:w-[60%]">
                <div className="clouds relative">
                    <img className='absolute w-[180px] h-[100px] top-[-70px] left-[-50px]' src="src/assets/clouds-01.png" alt="" />
                    <img className='absolute w-[180px] h-[100px] top-[-150px] left-[180px]' src="src/assets/clouds-01.png" alt="" />
                </div>
                <img className='w-[250px] z-20 h-[220px] absolute left-[-70px] top-[240px]' src="src/assets/plants-03.png" alt="" />
                <img className='w-[280px] z-10 h-[300px] absolute left-[-80px] top-[120px]' src="src/assets/plants-02.png" alt="" />
                <img className='w-[180px] h-[220px] absolute top-[150px]' src="src/assets/plants-05.png" alt="" />
                <img className='w-[180px] h-[200px] absolute left-[-50px]' src="src/assets/plants-04.png" alt="" />
                <img className='w-[250px] h-[240px] z-20 absolute right-[-30px] top-[250px]' src="src/assets/plants-06.png" alt="" />
                <img className='w-[250px] h-[300px] absolute right-[15px] top-[120px]' src="src/assets/plants-01.png" alt="" />
                <img className='relative z-20 top-0 w-full lg:w-[700px] h-auto lg:h-[450px]' src="src/assets/fixed elements.png" alt="" />
            </div>
        </div>
    );
}

export default Body;
