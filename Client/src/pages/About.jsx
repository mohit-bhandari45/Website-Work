import React, { useState } from 'react';
import Navbar from '../components/UserPageComps/UniversalComps/Navbar';
import Footer from '../components/UniversalComp/Footer';
import HeroSec from '../components/AboutComps/HeroSec';
import Card from '../components/AboutComps/Card';
import SubFooter from '../components/LandingPageComp/SubFooter';

const AboutPage = () => {
  const [stats, setstats] = useState([
    {
      icon:"icon_shop.png",
      views:"10.5k",
      title:"Sellers active our site"
    },
    {
      icon:"Vector (9).png",
      views:"33k",
      title:"Monthly Produduct Sale"
    },
    {
      icon:"Icon-Shopping bag.png",
      views:"45.5k",
      title:"Customer active in our site"
    },
    {
      icon:"Icon-Moneybag.png",
      views:"25k",
      title:"Anual gross sale in our site"
    }
  ])

  return (
    <>
      <Navbar />
      <HeroSec />
      <div className="cards justify-center items-center flex w-full h-[50vh] gap-24">
        {stats.map((stat)=>{
          return <Card icon={`src/assets/${stat.icon}`} views={stat.views} title={stat.title}/>
        })}
      </div>
      <SubFooter/>
      <Footer />
    </>
  );
};

export default AboutPage;