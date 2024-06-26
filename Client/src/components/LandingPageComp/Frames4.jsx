import React from 'react'

const Frames4 = () => {
    return (
        <div className='h-[130vh] w-full font-[Helvetica] flex flex-col justify-center items-center'>
            <div className="head h-[30vh] w-[90%]">
                <div className="head2 h-[10vh] flex justify-start items-center gap-4 w-full">
                    <div className="bar w-[1.5%] h-[70%] rounded-sm bg-[#DB4444]"></div>
                    <div className="title text-[#DB4444] font-medium">Featured</div>
                </div>
                <div className="cont w-full flex justify-between items-center h-[15vh]">
                    <div className="first flex justify-center items-center gap-16 h-full">
                        <div className="title text-4xl font-semibold">New Arrival</div>
                    </div>
                </div>
            </div>
            <div className='w-[90%] h-[90vh] flex justify-start items-center gap-8'>
                <div className="left h-full w-[45%] bg-black box-border px-5 py-5 rounded-lg text-white gap-2 object-cover flex flex-col relative justify-end items-start">
                    <img src="src/assets/ps5-slim-goedkope-playstation_large 1.png" className='w-[80%] h-[95%] absolute bottom-0 right-5' alt="" />
                    <h1 className='font-bold text-xl relative z-10'>Brass Lamp</h1>
                    <p className='w-[35%] text-sm relative z-10 opacity-80 font-thin'>Handicrafted Bird Brass lamp with 5 diyas</p>
                    <div className=''><button className='outline-none border-b-2 border-white relative z-10'>Shop Now</button></div>
                </div>
                <div className="right h-full w-[55%] box-border flex flex-col gap-8">
                    <div className="top h-[50%] w-full bg-black rounded-md px-6 justify-between flex items-end">
                        <div className="content text-white flex flex-col gap-3 justify-end items-start py-8">
                            <h1 className='font-bold text-xl'>Brass Collections</h1>
                            <p className='w-[70%] text-sm opacity-80 font-thin'>Featured original handcrafted brass collections that give you vitange vibe.</p>
                            <div className=''><button className='outline-none border-b-2 border-white'>Shop Now</button></div>
                        </div>
                        <div className="image">
                            <img src="src/assets/attractive-woman-wearing-hat-posing-black-background 1.png" alt="" />
                        </div>
                    </div>
                    <div className='bottom h-[50%] w-full flex justify-center items-center gap-10'>
                        <div className="first w-1/2 bg-black h-full rounded-md relative flex flex-col justify-end py-4 px-4">
                            <img className='absolute top-8 left-28 z-10' src="src/assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png" alt="" />
                            <img className='absolute left-10 top-0' src="src/assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1 (1).png" alt="" />
                            <div className='content text-white flex gap-2 flex-col justify-center '>
                                <div className=''><button className='outline-none border-b-2 border-white'>Shop Now</button></div>
                                <h1 className='font-bold text-xl'>Khadi Saree</h1>
                                <p className='w-[70%] text-sm opacity-80 font-thin'>Traditional Handloom Khadi</p>
                            </div>
                        </div>
                        <div className="second w-1/2 bg-black h-full rounded-lg flex justify-center items-center">
                            <img src="src/assets/652e82cd70aa6522dd785109a455904c.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frames4