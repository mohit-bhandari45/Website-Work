import React from 'react'

const Card = ({img,title,desc}) => {
    return (
        <div className='w-full flex justify-center items-center'>
            <div className="image h-full w-[20%]"><img className='h-' src={img} alt="" /></div>
            <div className="details flex justify-end items-center h-[20%] w-[50%] pl-32">
                <div className="main w-full">
                    <div className="name flex justify-start items-center py-6 gap-5">
                        <h1 className='text-4xl font-bold font-[Helvetica]'>{title}</h1>
                        <div className="rating flex justify-center items-center gap-1">
                            <img className='h-4' src="src/assets/Star.png" alt="" />
                            <img className='h-4' src="src/assets/Star.png" alt="" />
                            <img className='h-4' src="src/assets/Star.png" alt="" />
                            <img className='h-4' src="src/assets/Star.png" alt="" />
                            <img className='h-4' src="src/assets/Star.png" alt="" />
                        </div>
                        <div className="total font-semibold">12k remaining</div>
                    </div>
                    <div className="para font-semibold text-gray-600 font-[Helvetica] w-[70%]">
                        {desc}                    </div>
                    <div className="button font-bold text-xl font-[Helvetica] py-4 w-[70%] flex justify-between">
                        <button className='bg-black text-white py-2 px-5 rounded-full'>Add to Cart</button>
                        <img className='h-6' src="src/assets/Bookmark.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
