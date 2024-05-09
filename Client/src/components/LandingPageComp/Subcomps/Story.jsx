import React, { useState } from 'react'

const Story = ({mainimage,image,name,para}) => {

    const [changeimage, setchangeimage] = useState("")

    const handleChange=(e)=>{
        setchangeimage(e.target.value)
        console.log(changeimage)
    }

    if(changeimage.length<0){
        return console.log("wefweegg")
    }

    return (
        <div className="img1 md:h-[53vh] xl:min-h-[94vh] w-[23vw] relative py-20 top-0 hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer">
            <img className='absolute top-20 md:h-[45vh] xl:min-h-[75vh] w-full' src={changeimage.length>1?changeimage:mainimage} alt="" />
            {/* <input onChange={handleChange} className='absolute z-20' type="file"/> */}
            <div className="flex justify-center items-end h-[75vh] bg-[#00000082] relative z-10">
                <div className='flex text-white px-5 gap-3 justify-center py-5'>
                    <div className="image">
                        <img className='h-12 w-36' src={image} alt="" />
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
