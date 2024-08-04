import React, { useState } from 'react';

const HeroSec = () => {
    const [bool, setbool] = useState(false);

    return (
        <>
            <div className="main h-screen md:h-[90vh] xl:h-[80vh] 2xl:h-[90vh] w-full flex font-[Helvetica] flex-col justify-center items-center px-4 sm:px-8 md:px-16">
                <div className="cont w-full h-full">
                    <div className="nav2 main1 h-16 flex justify-between items-center">
                        <div className="path text-gray-400">
                            <span>Home</span>
                            <span className="px-2"> / </span>
                            <span className="font-semibold">About</span>
                        </div>
                    </div>
                    <div className="hero h-[95%] sm:h-full w-full flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-16">
                        <div className="left flex flex-col justify-center items-start gap-6 md:gap-10 w-full md:w-1/2">
                            <h1 className="text-4xl md:text-6xl font-bold">Our Story</h1>
                            <div className="para flex flex-col text-base md:text-lg font-medium w-full md:w-[110%] lg:w-[80%]">
                                <div className="one">
                                    Welcome to Acrilc, where art meets innovation and creativity finds its canvas in every aspect of our existence. Founded with a vision to revolutionize the art industry, Acrilc is not just an e-commerce platform, it's a vibrant community that celebrates the spirit of artistic expression.
                                </div>
                                <div className="two mt-4">
                                    At Acrilc, we believe that art is more than just colors on a canvas, it's a reflection of emotions, stories, and perspectives that shape our world. Our mission is to empower artists, both seasoned professionals and emerging talents, by providing them with a platform to showcase their creativity, connect with a global audience, and transform their passion into a sustainable livelihood.
                                </div>
                            </div>
                            <div onClick={() => setbool(!bool)} className="icon cursor-pointer">
                                <img className={`w-6 transition-transform duration-700 ease-in-out ${bool ? 'rotate-180' : 'rotate-0'}`} src="src/assets/Vector.png" alt="Toggle" />
                            </div>
                        </div>
                        <div className="right flex justify-center items-center w-full md:w-1/2">
                            <img className="w-full h-auto max-w-lg" src="src/assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1 (1).png" alt="Hero" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`transition-all duration-700 ease-in-out ${bool ? 'opacity-100 h-auto py-5' : 'opacity-0 h-0 overflow-hidden'}`}>
                <div className="main w-full px-4 sm:px-8">
                    <div className="content w-full md:w-[90%] lg:w-[93%] xl:w-[95%] mx-auto text-base md:text-lg">
                        <div className="one mb-4">
                            Our curated collection of art accessories, supplies, and handcrafted products is a testament to our commitment to quality, authenticity, and innovation. From traditional art forms steeped in cultural heritage to contemporary expressions that push the boundaries of imagination, Acrilc offers a diverse range of products that inspire, delight, and captivate.
                        </div>
                        <div className="two mb-4">
                            But Acrilc is more than just a marketplace; it's a nurturing ecosystem that fosters collaboration, learning, and growth. We collaborate with artists, designers, and creative minds from across India to curate unique collections that resonate with art lovers worldwide. Our platform provides artists with valuable insights, tools, and resources to enhance their craft, reach new audiences, and build sustainable careers.
                        </div>
                        <div className="three">
                            Whether you're an artist seeking inspiration, a collector looking for that perfect piece, or a gift-giver in search of something truly unique, Acrilc invites you to explore the boundless possibilities of art. Our commitment to creativity, quality, and customer satisfaction ensures that every interaction with Acrilc is a memorable and enriching experience.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSec;
