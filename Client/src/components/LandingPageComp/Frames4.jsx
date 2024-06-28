import React from 'react';

const Frames4 = () => {
    return (
        <div className='h-full w-full font-[Helvetica] flex flex-col justify-center items-center py-8'>
            <div className="w-[90%]">
                <div className="flex justify-start items-center gap-4 w-full h-16">
                    <div className="w-[1.5%] h-full rounded-sm bg-[#DB4444]"></div>
                    <div className="text-[#DB4444] font-medium">Featured</div>
                </div>
                <div className="w-full flex justify-between items-center h-16 mt-4">
                    <div className="flex justify-center items-center gap-16">
                        <div className="text-4xl font-semibold">New Arrival</div>
                    </div>
                </div>
            </div>
            <div className='w-[90%] flex flex-col lg:flex-row justify-start items-center gap-8 mt-8'>
                <div className="h-full lg:w-[45%] bg-black box-border px-5 py-5 rounded-lg text-white gap-2 md:gap-56 flex flex-col relative justify-end items-start">
                    <img src="src/assets/ps5-slim-goedkope-playstation_large 1.png" className='w-[80%] h-[95%] lg:absolute lg:right-5 object-cover' alt="" />
                    <h1 className='font-bold text-xl relative z-10'>Brass Lamp</h1>
                    <p className='w-[70%] lg:w-[35%] text-sm relative z-10 opacity-80 font-thin'>Handicrafted Bird Brass lamp with 5 diyas</p>
                    <div><button className='outline-none border-b-2 border-white relative z-10'>Shop Now</button></div>
                </div>
                <div className="h-full lg:w-[55%] box-border flex flex-col gap-8 md:gap-18">
                    <div className="h-[50%] w-full bg-black rounded-md px-6 flex justify-between items-end">
                        <div className="text-white flex flex-col gap-3 justify-end items-start py-8">
                            <h1 className='font-bold text-xl'>Brass Collections</h1>
                            <p className='w-[70%] lg:w-[70%] text-sm opacity-80 font-thin'>Featured original handcrafted brass collections that give you vintage vibe.</p>
                            <div><button className='outline-none border-b-2 border-white'>Shop Now</button></div>
                        </div>
                        <div>
                            <img src="src/assets/attractive-woman-wearing-hat-posing-black-background 1.png" alt="" />
                        </div>
                    </div>
                    <div className='h-[50%] w-full flex flex-col lg:flex-row justify-center items-center md:gap-34 gap-10'>
                        <div className="lg:w-1/2 bg-black h-full rounded-md relative flex flex-col justify-end py-4 md:py-32 md:px-12 px-4">
                            <img className='lg:absolute lg:top-8 lg:left-28 z-10' src="src/assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png" alt="" />
                            <img className='lg:absolute lg:left-10 lg:top-0' src="src/assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1 (1).png" alt="" />
                            <div className='text-white flex gap-2 flex-col justify-center'>
                                <div><button className='outline-none border-b-2 border-white'>Shop Now</button></div>
                                <h1 className='font-bold text-xl '>Khadi Saree</h1>
                                <p className='w-[70%] lg:w-[70%] text-sm opacity-80 font-thin '>Traditional Handloom Khadi</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-black h-full rounded-lg flex justify-center items-center py-20 px-20 md:px-0 md:py-20">
                            <img src="src/assets/652e82cd70aa6522dd785109a455904c.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frames4;
