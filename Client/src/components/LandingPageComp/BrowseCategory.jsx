import React, { useState } from 'react'
import Browses from './Subcomps/Browses'

const BrowseCategory = () => {
    const [items, setitems] = useState([
        "Wall Paintings",
        "Wooden Crafts",
        "Jewellery",
        "Dokra art",
        "khadi",
        "Scultures"
    ])
    return (
        <div className='h-[70vh] py-16 w-full font-[Helvetica] flex flex-col justify-center items-center'>
            <div className="head h-[30vh] w-[90%]">
                <div className="head2 h-[10vh] flex justify-start items-center gap-4 w-full">
                    <div className="bar w-[1.5%] h-[70%] rounded-sm bg-[#DB4444]"></div>
                    <div className="title text-[#DB4444] font-medium">Categories</div>
                </div>
                <div className="cont w-full flex justify-between items-center h-[15vh]">
                    <div className="first flex justify-center items-center gap-16 h-full">
                        <div className="title text-4xl font-semibold">Browse by Category</div>
                    </div>
                    <div className="second flex justify-center items-center gap-2">
                        <div className="arrow1 bg-[#F5F5F5] rounded-full p-4"><img src="src/assets/icons_arrow-left.png" alt="" /></div>
                        <div onClick={() => { setright(prevright => prevright + 20) }} className="arrow2 bg-[#F5F5F5] rounded-full p-4"><img src="src/assets/icons arrow-right.png" alt="" /></div>
                    </div>
                </div>
            </div>
            <div className='w-[90%] h-[40vh] flex justify-start items-center gap-8'>
                {items.map((item,index)=>{
                    return <Browses key={index} item={item}/>
                })}
            </div>
        </div>
    )
}

export default BrowseCategory
