import React from 'react'

const Frames = () => {
    return (
        <div className='flex justify-center items-center font-[Helvetica]'>
            <div className='main h-[100vh] grid grid-cols-3 justify-center items-center gap-20'>

                <div className="img1 bg-img-1 h-[75vh] w-[23vw]">
                    <div className="flex justify-center items-end h-[75vh] bg-[#00000082]">
                        <div className='flex text-white px-5 gap-3 justify-center py-5'>
                            <div className="image">
                                <img className='h-14 w-36' src="/icons/Ellipse 40.png" alt="" />
                            </div>
                            <div className="cont pt-1">
                                <div className="1 font-semibold">Ayushi</div>
                                <div className="para font-normal">
                                    One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="img2 bg-img-2 h-[75vh] w-[23vw]">
                    <div className="flex justify-center items-end h-[75vh] bg-[#00000082]">
                        <div className='flex text-white px-5 gap-3 justify-center py-5'>
                            <div className="image">
                                <img className='h-14 w-36' src="/icons/Ellipse 39.png" alt="" />
                            </div>
                            <div className="cont pt-1">
                                <div className="1 font-semibold">Jack</div>
                                <div className="para font-normal">
                                    One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img1 bg-img-3 w-[23vw] h-[75vh]">
                    <div className="flex justify-center items-end h-[75vh] bg-[#00000082]">
                        <div className='flex text-white px-5 gap-3 justify-center py-5'>
                            <div className="image">
                                <img className='h-14 w-36' src="/icons/Ellipse 51.png" alt="" />
                            </div>
                            <div className="cont pt-1">
                                <div className="1 font-semibold">Tony</div>
                                <div className="para font-normal">
                                    One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frames
