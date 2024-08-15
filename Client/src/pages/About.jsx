import React, { useState } from 'react';
import Navbar from '../components/UserPageComps/UniversalComps/Navbar';
import Footer from '../components/UniversalComp/Footer';
import HeroSec from '../components/AboutComps/HeroSec';
import Card from '../components/AboutComps/Card';
import SubFooter from '../components/UserPageComps/HomePageComps/SubFooter';

const About = () => {
  const [stats, setstats] = useState([
    {
      icon: "icon_shop.png",
      views: "10.5k",
      title: "Sellers active our site",
      coloured: false
    },
    {
      icon: "Vector (9).png",
      views: "33k",
      title: "Monthly Produduct Sale",
      coloured: false
    },
    {
      icon: "Icon-Shopping bag.png",
      views: "45.5k",
      title: "Customer active in our site",
      coloured: false
    },
    {
      icon: "Icon-Moneybag.png",
      views: "25k",
      title: "Anual gross sale in our site",
      coloured: false
    }
  ]);

  const handleClick = (e, index) => {
    const elements = stats.map((element, idx) => idx === index ? { ...element, coloured: !element.coloured } : { ...element, coloured: false });
    setstats(elements);
  };

  return (
    <>
      <Navbar />
      <HeroSec />
      <div className="w-full h-[100vh] sm:h-[60vh] px-4 py-8 flex justify-center">
        <div className="grid grid-cols-1 w-full sm:w-auto gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              coloured={stat.coloured}
              index={idx}
              icon={`src/assets/${stat.icon}`}
              views={stat.views}
              title={stat.title}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
      <SubFooter />
      <Footer />
    </>
  );
};

export default About;
