import React from 'react';
import { NavLink } from 'react-router-dom'
import Card from '../components/AboutComps/Card';

const AboutPage = () => {
  return (
    <>
      <div className="h-full w-full absolute">
        <img className='h-[300vh] w-full' src="src/assets/WhatsApp Image 2024-05-05 at 14.14.22_d6498270.jpg" alt="" />
      </div>
      <div className="bg-[#eed9ae] bg-opacity-90 font-[Helvetica] text-black min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className='flex justify-center items-center mb-1'><NavLink to="/"><img className='w-80 h-36' src="src/assets/acrilc logo-09.png" alt="" /></NavLink></div>
        <div className="w-[90vw] mx-auto">
          <div className="mb-12 w-full">
            <div className="flex justify-center items-center w-full">
              <div className="w-[100%] px-8 py-0 shadow-lg rounded-lg text-lg font-medium">
                <h1 className="text-5xl font-bold mb-4 text-center">Discover the Artistry of Acrilc</h1>
                <h1 className="text-2xl font-bold mb-2 text-center">
                  Welcome to Acrilc
                </h1>
                <p className="text-gray-700 text-center">
                  Where art meets innovation and creativity finds its canvas in every aspect of our existence. Founded with a vision to revolutionize the art industry, Acrilc is not just an e-commerce platform; it's a vibrant community that celebrates the spirit of artistic expression.
                </p>
                <p className="text-gray-700 text-center">
                  At Acrilc, we believe that art is more than just colors on a canvas; it's a reflection of emotions, stories, and perspectives that shape our world. Our mission is to empower artists, both seasoned professionals and emerging talents, by providing them with a platform to showcase their creativity, connect with a global audience, and transform their passion into a sustainable livelihood.
                </p>
                <p className="text-gray-700 text-center">
                  Our curated collection of art accessories, supplies, and handcrafted products is a testament to our commitment to quality, authenticity, and innovation. From traditional art forms steeped in cultural heritage to contemporary expressions that push the boundaries of imagination, Acrilc offers a diverse range of products that inspire, delight, and captivate.
                </p>
                <p className="text-gray-700 text-center">
                  But Acrilc is more than just a marketplace; it's a nurturing ecosystem that fosters collaboration, learning, and growth. We collaborate with artists, designers, and creative minds from across India to curate unique collections that resonate with art lovers worldwide. Our platform provides artists with valuable insights, tools, and resources to enhance their craft, reach new audiences, and build sustainable careers.
                </p>
                <p className="text-gray-700 text-center">
                  Whether you're an artist seeking inspiration, a collector looking for that perfect piece, or a gift-giver in search of something truly unique, Acrilc invites you to explore the boundless possibilities of art. Our commitment to creativity, quality, and customer satisfaction ensures that every interaction with Acrilc is a memorable and enriching experience.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 bg-white rounded-lg shadow-lg py-8 px-10 w-[90%] mx-auto">
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
              <Card name="Sambit Ghosh - Founder" para="Meet the visionary behind our journey, Sambit Gosh, the founder hailing from the culturally rich land of West Bengal. Sambit's all about blending tradition with trendiness, infusing our work with that special touch of culture. With a knack for understanding all aspects of our app creation, he's our guiding light through every step of the process. Think of him as our very own maestro of innovation, mixing tradition and tech like nobody else." />
              <Card name="Sachin Lodhi - Co-founder" para="Meet Sachin Lodhi, our accomplished co-founder, with roots in the picturesque landscapes of Uttarakhand. With a keen eye for detail and a passion for perfection, Sachin orchestrates our operations with finesse and flair. From brainstorming ingenious solutions to providing unwavering support, Sachin embodies the spirit of collaboration and innovation. Alongside our founder, he forms the dynamic duo driving our journey towards excellence." />
              <Card name="Nidhi - Executive Director" para="Introducing Nidhi, our esteemed Executive Director, the driving force behind our creative pursuits and operational excellence. With an astute eye for talent and an exceptional knack for management, Nidhi leads our artist interns with finesse and precision. Her unwavering dedication ensures that every project is flawlessly executed, setting new benchmarks of excellence. As an integral part of our executive body, Nidhi's leadership inspires innovation and drives our collective vision forward, shaping the very essence of our company's success." />
              <Card name="Vipul Singh - UX/UI Designer" para="Anshu Gupta, our UX/UI Designer extraordinaire, is the mastermind behind the seamless and visually captivating experience you encounter on our platform. With a keen eye for detail and a passion for user-centric design, Anshu ensures that every click, scroll, and interaction feels intuitive and delightful. His role involves crafting intuitive user journeys, creating stunning visual interfaces, and continuously refining the user experience to exceed expectations." />
              <Card name="Sanpreet Kaur - Digital Marketing Executive" para="Meet Sanpreet, our Social Media Guru and Digital Marketing Ace, orchestrating the symphony of our online presence. With an innate flair for trends and a keen strategic mind, Sanpreet infuses our brand with vitality in the digital realm. More than just a title, she's the silent force propelling our online narrative forward, offering invaluable insights and solutions to any challenge that arises." />
              <Card name="Mantresh - Assistant Operation and Supply Chain Executive" para="Meet Mantresh, our Assistant Operation and Supply Chain Executive, a maestro orchestrating the harmonious flow of our operational processes. With a meticulous eye for detail and a strategic mindset, Mantresh ensures seamless coordination and efficiency in our supply chain operations. More than just a title, he's the backbone of our logistical prowess, tirelessly working behind the scenes to optimize workflows and deliver excellence to our customers." />
              <Card name="Mohit Bhandari - Developer" para="Introducing Mohit Bhandari, our brilliant developer weaving digital magic behind the scenes. With precision and prowess, Mohit crafts the intricate framework that powers our platform, ensuring a seamless and captivating user experience. From elegant front-end designs to robust backend systems, Mohit's expertise elevates our website above the rest, delivering innovation and excellence at every click." />
              <Card name="Avantika - Art Coordinator" para="Introducing Avantika, our resident artist extraordinaire, weaving magic with her brush strokes to bring our brand's vision to life. With a passion for folk art and an eye for detail, Avantika infuses each creation with a touch of whimsy and tradition. Her artistry not only adorns our products but also tells the story of our brand's journey." />
              <Card name="Sakshi, Himanshi & Sneha - Artists" para="Our distinguished artists renowned for their unparalleled dedication to perfection. With a deft hand and an unwavering commitment to excellence, Sakshi brings her masterpieces to life with breathtaking precision. Each stroke she paints carries a sense of grace and finesse, captivating all who behold her work." />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutPage;
