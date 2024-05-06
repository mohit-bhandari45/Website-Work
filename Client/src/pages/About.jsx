import React from 'react';
import { NavLink } from 'react-router-dom'

const AboutPage = () => {
  return (
    <>
      <div className="h-full w-full absolute">
        <img className='h-[300vh] w-full' src="/icons/WhatsApp Image 2024-05-05 at 14.14.22_d6498270.jpg" alt="" />
      </div>
      <div className="bg-[#eed9ae] bg-opacity-90 font-[Helvetica] text-black min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className='flex justify-center items-center mb-16'><NavLink to="/"><img className='w-96 h-44' src="/icons/acrilc logo-09.png" alt="" /></NavLink></div>
        <div className="w-[90vw] mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-center">Discover the Artistry of Acrilc</h1>
            <p className="text-lg text-center px-36">Welcome to Acrilc, where art meets innovation! We are an e-commerce platform dedicated to showcasing the unparalleled creativity of Indian artists and bringing their unique masterpieces to art enthusiasts worldwide.</p>
          </div>

          <div className="grid grid-cols-1 gap-10 bg-white rounded-lg shadow-lg p-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
              <p className="text-lg ">We envision a world where every artist's voice is heard, where creativity knows no bounds, and where art lovers can discover, appreciate, and own one-of-a-kind creations that speak to their soul.</p>
            </div>

            <div>

              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <p className="text-lg ">To empower artists by providing them with a platform to showcase and sell their handcrafted artworks, fostering a community of creativity, and offering art enthusiasts a curated collection of exquisite pieces to enhance their lives.</p>
            </div>

            <div>

              <h2 className="text-2xl font-bold mb-2">What We Offer</h2>
              <ul className="text-lg  list-disc list-inside">
                <li>A diverse range of art forms, from traditional to contemporary, ensuring something for every taste and style.</li>
                <li>Personalized and customized options, allowing you to own art that resonates with your individuality.</li>
                <li>Quality craftsmanship and attention to detail, ensuring each piece is a testament to the artist's passion and dedication.</li>
                <li>A seamless and secure shopping experience, with easy navigation and transparent transactions.</li>
              </ul>
            </div>
          </div>

        </div>
        <div className="bg-gradient-to-br min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Who are We?</h1>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Team Members */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-black mb-4">Sambit Ghosh - Founder</h2>
                <p>Meet the visionary behind our journey, Sambit Gosh, the founder hailing from the culturally rich land of West Bengal. Sambit's all about blending tradition with trendiness, infusing our work with that special touch of culture. With a knack for understanding all aspects of our app creation, he's our guiding light through every step of the process. Think of him as our very own maestro of innovation, mixing tradition and tech like nobody else.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-black mb-4">Sachin Lodhi - Co-founder</h2>
                <p>Meet Sachin Lodhi, our accomplished co-founder, with roots in the picturesque landscapes of Uttarakhand. With a keen eye for detail and a passion for perfection, Sachin orchestrates our operations with finesse and flair. From brainstorming ingenious solutions to providing unwavering support, Sachin embodies the spirit of collaboration and innovation. Alongside our founder, he forms the dynamic duo driving our journey towards excellence.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-black mb-4">Nidhi - Executive Director</h2>
                <p>Introducing Nidhi, our esteemed Executive Director, the driving force behind our creative pursuits and operational excellence. With an astute eye for talent and an exceptional knack for management, Nidhi leads our artist interns with finesse and precision. Her unwavering dedication ensures that every project is flawlessly executed, setting new benchmarks of excellence. As an integral part of our executive body, Nidhi's leadership inspires innovation and drives our collective vision forward, shaping the very essence of our company's success.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-black mb-4">Anshu Gupta - UX/UI Designer</h2>
                <p>Anshu Gupta, our UX/UI Designer extraordinaire, is the mastermind behind the seamless and visually captivating experience you encounter on our platform. With a keen eye for detail and a passion for user-centric design, Anshu ensures that every click, scroll, and interaction feels intuitive and delightful. His role involves crafting intuitive user journeys, creating stunning visual interfaces, and continuously refining the user experience to exceed expectations.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-black mb-4">Sanpreet Kaur - Digital Marketing Executive</h2>
                <p>Meet Sanpreet, our Social Media Guru and Digital Marketing Ace, orchestrating the symphony of our online presence. With an innate flair for trends and a keen strategic mind, Sanpreet infuses our brand with vitality in the digital realm. More than just a title, she's the silent force propelling our online narrative forward, offering invaluable insights and solutions to any challenge that arises.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-black mb-4">Mantresh - Assistant Operation and Supply Chain Executive</h2>
                <p>Meet Mantresh, our Assistant Operation and Supply Chain Executive, a maestro orchestrating the harmonious flow of our operational processes. With a meticulous eye for detail and a strategic mindset, Mantresh ensures seamless coordination and efficiency in our supply chain operations. More than just a title, he's the backbone of our logistical prowess, tirelessly working behind the scenes to optimize workflows and deliver excellence to our customers.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-black mb-4">Mohit Bhandari - Developer</h2>
                <p>Introducing Mohit Bhandari, our brilliant developer weaving digital magic behind the scenes. With precision and prowess, Mohit crafts the intricate framework that powers our platform, ensuring a seamless and captivating user experience. From elegant front-end designs to robust backend systems, Mohit's expertise elevates our website above the rest, delivering innovation and excellence at every click.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-black mb-4">Avantika - Art Coordinator</h2>
                <p>Introducing Avantika, our resident artist extraordinaire, weaving magic with her brush strokes to bring our brand's vision to life. With a passion for folk art and an eye for detail, Avantika infuses each creation with a touch of whimsy and tradition. Her artistry not only adorns our products but also tells the story of our brand's journey.</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-black mb-4">Sakshi, Himanshi & Sneha - Artists</h2>
                <p>Our distinguished artists renowned for their unparalleled dedication to perfection. With a deft hand and an unwavering commitment to excellence, Sakshi brings her masterpieces to life with breathtaking precision. Each stroke she paints carries a sense of grace and finesse, captivating all who behold her work.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutPage;
