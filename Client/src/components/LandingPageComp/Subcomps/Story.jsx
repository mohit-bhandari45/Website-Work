import React from 'react'

const Story = ({mainimage,image,name,para}) => {
    return (
        <div className="img1 h-[94vh] w-[23vw] relative py-20 top-0 hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer">
            <img className='absolute top-20 h-[75vh] w-full' src={mainimage} alt="" />
            <div className="flex justify-center items-end h-[75vh] bg-[#00000082] relative z-10">
                <div className='flex text-white px-5 gap-3 justify-center py-5'>
                    <div className="image">
                        <img className='h-14 w-36' src={image} alt="" />
                    </div>
                    <div className="cont pt-1">
                        <div className="1 font-semibold">{name}</div>
                        <div className="para font-normal">
                            {para}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story
