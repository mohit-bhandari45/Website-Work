import React from 'react'

const Body = () => {
    return (
        <div className='body flex mx-auto w-[95vw] h-[75vh] gap-64'>
            <div className="content w-[450px] pl-16 py-10">
                <img className='w-[360px] h-[130px] pl-6 ' src="icons/logo full.png" alt="" />
                <div className="para font-medium py-4 text-[20px] w-[500px] flex flex-col gap-0">
                    <span>Your personalized e-commerce platform for artists! Explore a curated collection of art accessories and products, designed to inspire and </span>
                    <span>empower your creativity.</span>
                </div>
                <div className="buttons flex pl-5 text-xl gap-10 pt-2">
                    <button className='rounded-full px-9 py-3 bg-[#ec8a73] text-white flex justify-center items-center'>Buy Now</button>
                    <button className='underline'>Show More</button>
                </div>
            </div>
            <div className="image relative pt-10">
                <div className="clouds relative">
                    <img className='absolute w-[180px] h-[100px] top-[-70px] left-[-50px]' src="icons/clouds-01.png" alt="" />
                    <img className='absolute w-[180px] h-[100px] top-[-150px] left-[180px]' src="icons/clouds-01.png" alt="" />
                </div>
                <img className='w-[250px] z-20 h-[220px] absolute left-[-70px] top-[240px]' src="icons/plants-03.png" alt="" />
                <img className='w-[280px] z-10 h-[300px] absolute left-[-80px] top-[120px]' src="icons/plants-02.png" alt="" />
                <img className='w-[180px] h-[220px] absolute top-[150px]' src="icons/plants-05.png" alt="" />
                <img className='w-[180px] h-[200px] absolute left-[-50px]' src="icons/plants-04.png" alt="" />
                <img className='w-[250px] h-[240px] z-20 absolute right-[-30px] top-[250px]' src="icons/plants-06.png" alt="" />
                <img className='w-[250px] h-[300px] absolute right-[15px] top-[120px]' src="icons/plants-01.png" alt="" />
                <img className='relative z-20 top-0 w-[700px] h-[450px]' src="icons/fixed elements.png" alt="" />

            </div>
        </div>
    )
}

export default Body
