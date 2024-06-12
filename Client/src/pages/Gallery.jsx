import React from 'react'
import Navbar from '../components/GalleryComps/Navbar'
import Search from '../components/UniversalComp/Search'
import Card2 from "../components/LandingPageComp/Subcomps/Card2"
import { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Mid from '../components/GalleryComps/Mid'
import HeroSec from '../components/GalleryComps/HeroSec'
import MinorSec from '../components/GalleryComps/MinorSec'
import SubFooter from '../components/LandingPageComp/SubFooter'
import Footer from '../components/UniversalComp/Footer'
import Mid2 from '../components/GalleryComps/Mid2'
import Card from '../components/GalleryComps/Card'
import Frames5 from '../components/LandingPageComp/Frames5'

const Gallery = () => {
  const [details, setdetails] = useState([
    {
      state: "West Bengal",
      image: "src/assets/Ellipse 54 (3).png",
    },
    {
      state: "Uttarakhand",
      image: "src/assets/Ellipse 54 (3).png",
    },
    {
      state: "Delhi",
      image: "src/assets/Ellipse 54.png",
    },

    {
      state: "Bihar",
      image: "src/assets/Ellipse 54 (2).png",
    },
    {
      state: "Punjab",
      image: "src/assets/Ellipse 54 (1).png",
    },
    {
      state: "Odissa",
      image: "src/assets/Ellipse 54 (1).png",
    },
    {
      state: "Kerala",
      image: "src/assets/Ellipse 54 (1).png",
    },
    {
      state: "Karnataka",
      image: "src/assets/Ellipse 54 (1).png",
    },
    {
      state: "Chennai",
      image: "src/assets/Ellipse 54 (1).png",
    },
  ])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <Navbar />
      <div className='h-[10vh] flex justify-center items-center font-[Helvetica]'>
        <div className='text-6xl font-bold'>Gallery</div>
      </div>
      <Search />
      <Carousel autoPlay={true} arrows={false} infinite showDots={false} keyBoardControl={true} shouldResetAutoplay={true} focusOnSelect={true} autoPlaySpeed={1500} className='' responsive={responsive}>
        {details.map((detail) => {
          return <Card2 state={detail.state} image={detail.image} />
        })}
      </Carousel>
      <Mid />
      <HeroSec />
      <MinorSec />
      <div className="hero3 h-[120vh] w-full flex flex-col py-16">
        <Mid2 />
        <div className="cards w-full h-[100vh] flex justify-center items-center">
          <div className="inner w-[90%] h-full flex flex-col justify-center items-center gap-3">
            <div className="one flex">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
            <div className="two flex">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
        </div>
      </div>
      <Frames5/>
      <SubFooter />
      <Footer />
    </>
  )
}

export default Gallery
