import React from 'react'
import { NavLink } from 'react-router-dom'
import { getLogo } from '../../apis/apis'

const Body = () => {
    const handleClick = () => {
        window.open("https://mail.google.com/mail/u/0/#inbox?compose=jrjtXMncSjWrhgQLSqkkKrvjtTflHZQXPBggfTnpxBBsPSgQjZxJBBDDlvlNztzTNHxsmpTq")
    }

    return (
        <div className='body flex flex-col-reverse lg:flex-row w-full lg:h-[75vh] gap-8 lg:gap-16 xl:gap-64 font-[Helvetica] relative justify-center items-center px-4 lg:px-10 py-8 lg:py-0'>
            <div className="content w-full lg:w-[45%] xl:w-[35%] flex flex-col gap-4 lg:gap-6">
                <img className='w-full max-w-[360px] h-auto mx-auto lg:mx-0' src={getLogo} alt="" />
                <div className="para font-medium text-base sm:text-lg lg:text-xl w-full">
                    <p className='w-[90%] xl:w-[120%] text-center lg:text-start flex justify-center items-center'>Your personalized e-commerce platform for artists! Explore a curated collection of art accessories and products, designed to inspire and empower your creativity.</p>
                </div>
                <div className="buttons flex flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6 lg:gap-10 text-lg lg:text-xl">
                    <button onClick={handleClick} className='rounded-full px-10 py-2 lg:px-9 lg:py-3 bg-[#ec8a73] text-white flex justify-center items-center'>Email Us</button>
                    <button className='underline font-medium'><NavLink to="/showmore">Show More</NavLink></button>
                </div>
                <div className="whatsapp w-full sm:w-[100%] lg:w-[100%] xl:w-[140%] 2xl:w-[120%] flex justify-center lg:justify-start">
                    <button className='rounded-full w-[90%] sm:w-[90%] lg:w-[100%] px-4 lg:px-7 py-2 lg:py-3 bg-[#66CF78] text-white flex justify-center lg:justify-start items-center gap-3 lg:gap-5'>
                        <div className="icon">
                            <img className='w-6 h-6 lg:w-[30px] lg:h-[30px]' src="src/assets/whatsapp-logo-variant 1.png" alt="" />
                        </div>
                        <div className="text font-bold text-sm sm:text-base lg:text-xl">Connect us through whatsapp</div>
                    </button>
                </div>
            </div>
            <div className="image relative w-full lg:w-1/2 xl:w-3/4 h-[300px] sm:h-[400px] lg:h-[450px] mt-8 lg:mt-0">
                <div className="clouds relative hidden lg:block">
                    <img className='absolute w-[120px] lg:w-[180px] h-auto top-[-70px] left-[-50px]' src="src/assets/clouds-01.png" alt="" />
                    <img className='absolute w-[120px] lg:w-[180px] h-auto top-[-150px] left-[180px]' src="src/assets/clouds-01.png" alt="" />
                </div>
                <img className='w-[150px] lg:w-[250px] h-auto absolute left-0 lg:left-[-70px] bottom-0 lg:top-[240px] z-20' src="src/assets/plants-03.png" alt="" />
                <img className='w-[180px] lg:w-[280px] h-auto absolute left-0 lg:left-[-80px] bottom-[80px] lg:top-[120px] z-10' src="src/assets/plants-02.png" alt="" />
                <img className='w-[120px] lg:w-[180px] h-auto absolute left-[50%] bottom-[100px] lg:top-[150px] transform -translate-x-1/2' src="src/assets/plants-05.png" alt="" />
                <img className='w-[120px] lg:w-[180px] h-auto absolute left-[20px] lg:left-[-50px] top-0' src="src/assets/plants-04.png" alt="" />
                <img className='w-[150px] lg:w-[250px] h-auto absolute right-0 lg:right-[-30px] bottom-0 lg:top-[250px] z-20' src="src/assets/plants-06.png" alt="" />
                <img className='w-[150px] lg:w-[250px] h-auto absolute right-[15px] bottom-[80px] lg:top-[120px]' src="src/assets/plants-01.png" alt="" />
                <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] lg:w-[700px] h-auto z-20' src="src/assets/fixed elements.png" alt="" />
            </div>
        </div>
    )
}

export default Body