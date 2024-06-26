import React, { useState } from 'react'

const HeroSec = () => {
    const [bool, setbool] = useState(false)

    return (
        <>
            <div className="main min-h-screen w-full flex flex-col justify-center items-center">
                <div className="cont w-[90%] h-full">
                    <div className="nav2 main1 h-[10vh] md:h-[15vh] lg:h-[25vh] flex justify-between items-center">
                        <div className="path">
                            <span className='font-[Helvetica] text-gray-400'>Home</span>
                            <span className='px-2 text-gray-400'> / </span>
                            <span className='font-semibold font-[Helvetica]'>About</span>
                        </div>
                    </div>
                    <div className="hero min-h-[80vh] lg:min-h-[90vh] w-full flex flex-col lg:flex-row justify-center items-center">
                        <div className="left w-full lg:w-1/2 flex flex-col justify-center items-start gap-6 md:gap-10 p-4">
                            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-[Helvetica]'>Our Story</h1>
                            <div className="para flex flex-col text-base md:text-lg lg:text-xl justify-center items-start gap-4 md:gap-5 font-medium font-[Helvetica] w-full lg:w-[85%] text-balance">
                                <div className="one">
                                    Welcome to Acrilc, where art meets innovation and creativity finds its canvas in every aspect of our existence. Founded with a vision to revolutionize the art industry, Acrilc is not just an e-commerce platform, it's a vibrant community that celebrates the spirit of artistic expression.
                                </div>
                                <div className="two">
                                    At Acrilc, we believe that art is more than just colors on a canvas, it's a reflection of emotions, stories, and perspectives that shape our world. Our mission is to empower artists, both seasoned professionals and emerging talents, by providing them with a platform to showcase their creativity, connect with a global audience, and transform their passion into a sustainable
                                    <div>livelihood.</div>
                                </div>
                            </div>
                            <div onClick={() => { setbool(!bool) }} className="icon cursor-pointer">
                                <img className={`${bool ? "rotate-180" : "rotate-0"} transition-all duration-700 ease-in-out w-6 py-4`} src="src/assets/Vector.png" alt="" />
                            </div>
                        </div>
                        <div className="right w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-0">
                            <img className='w-full lg:w-[80%] h-auto lg:h-[80vh]' src="src/assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1 (1).png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${bool ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"} py-5 transition-all duration-700 ease-in-out content w-full flex justify-center items-start gap-5`}>
                <div className="main w-[90%]">
                    <div className="content w-full lg:w-[50%] font-[Helvetica] flex text-base md:text-lg text-balance flex-col items-start justify-start gap-4">
                        <div className="one">
                            Our curated collection of art accessories, supplies, and handcrafted products is a testament to our commitment to quality, authenticity, and innovation. From traditional art forms steeped in cultural heritage to contemporary expressions that push the boundaries of imagination, Acrilc offers a diverse range of products that inspire, delight, and captivate.
                        </div>
                        <div className="two w-full lg:w-[90%]">
                            But Acrilc is more than just a marketplace; it's a nurturing ecosystem that fosters collaboration, learning, and growth. We collaborate with artists, designers, and creative minds from across India to curate unique collections that resonate with art lovers worldwide. Our platform provides artists with valuable insights, tools, and resources to enhance their craft, reach new audiences, and build sustainable careers.
                        </div>
                        <div className="three">
                            Whether you're an artist seeking inspiration, a collector looking for that perfect piece, or a gift-giver in search of something truly unique, Acrilc invites you to explore the boundless possibilities of art. Our commitment to creativity, quality, and customer satisfaction ensures that every interaction with Acrilc is a memorable and enriching experience.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSec
