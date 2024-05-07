import React from 'react'
import { NavLink } from 'react-router-dom'

const Body = () => {
    return (
        <div className='body flex mx-auto w-[95vw] h-[75vh] gap-64 font-[Helvetica] relative'>
            <div className="content w-[30vw] pl-16 py-10 flex flex-col gap-1">
                <img className='w-[360px] h-[130px] pl-6' src="src/assets/logo full.png" alt="" />
                <div className="para font-medium py-4 text-[20px] w-[500px] flex flex-col gap-0">
                    <span className='font-medium'>Your personalized e-commerce platform for artists! Explore a curated collection of art accessories and products, designed to inspire and </span>
                    <span className='font-medium'>empower your creativity.</span>
                </div>
                <div className="buttons flex pl-5 text-xl gap-10">
                    <button className='rounded-full px-9 py-3 bg-[#ec8a73] text-white flex justify-center items-center'>Email Us</button>
                    <button className='underline font-medium'><NavLink to="/showmore">Show More</NavLink></button>
                </div>
                <div className="whatsapp w-full">
                    <button className='rounded-full w-[95%] px-7 mt-3 py-3 bg-[#66CF78] text-white flex justify-start items-center gap-5'>
                        <div className="icon">
                            <img className='w-[35px] h-[35px]' src="src/assets/whatsapp-logo-variant 1.png" alt="" />
                        </div>
                        <div className="text font-bold text-xl">Connect us through whatsapp</div>
                    </button>
                </div>
            </div>
            <div className="image relative pt-10">
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
                <img className='relative z-20 top-0 w-[700px] h-[450px]' src="src/assets/fixed elements.png" alt="" />

            </div>
        </div>
    )
}

export default Body
