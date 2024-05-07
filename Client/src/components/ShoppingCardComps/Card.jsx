import React from 'react'

const Card = ({image,title,quantity,price}) => {
    return (
        <div className='w-[85%] flex justify-between items-center font-[Helvetica] bg-[#F5F5F5] py-5 rounded-xl px-20'>
            <div className="imageselements flex justify-center items-center gap-14">
                <div className="img">
                    <img className='w-[14vw] h-[40vh]' src={image} alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-4xl font-bold'>{title}</h1>
                    <div className="elements flex justify-start items-center gap-1">
                        <div className="num text-2xl">{quantity}</div>
                        <div className='img1 flex flex-col gap-0.5'>
                            <img className='w-[15px]' src="src/assets/Vector.png" alt="" />
                            <img className='w-[15px]' src="src/assets/Vector (1).png" alt="" />
                        </div>
                    </div>
                    <div className="price text-2xl">{price}</div>
                </div>
            </div>
            <div className="delete">
                <img className='w-[2vw] h-[5vh]' src="src/assets/bin.png" alt="" />
            </div>
        </div>
    )
}

export default Card
