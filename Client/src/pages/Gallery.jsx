import React, { useEffect } from 'react'
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
import { useParams } from 'react-router-dom'

/* Images */
import State1 from "../assets/Ellipse 54 (4).png"
import State2 from "../assets/Ellipse 54 (5).png"
import State3 from "../assets/Ellipse 54 (6).png"
import State4 from "../assets/Ellipse 54 (7).png"
import State5 from "../assets/Ellipse 54 (8).png"
import State6 from "../assets/Ellipse 54 (9).png"
import State7 from "../assets/Ellipse 54 (10).png"
import State8 from "../assets/Ellipse 54 (11).png"
import image from "../assets/Rectangle 4163.png"
import { getProductById } from '../apis/apis'

const Gallery = () => {
  const params = useParams();
  const { id } = params
  const [item, setItem] = useState()

  async function getProductByIdFn() {
    const req = await fetch(`${getProductById}/${id}`);
    const result = await req.json();
    setItem(result)
  }

  useEffect(() => {
    getProductByIdFn()
      window.scrollTo(0, 0);
  }, [id])

  const [details, setdetails] = useState([
    {
      state: "Delhi",
      image: State1,
    },
    {
      state: "Punjab",
      image: State2,
    },
    {
      state: "Delhi",
      image: State3,
    },

    {
      state: "Odissa",
      image: State4,
    },
    {
      state: "Maharastra",
      image: State5,
    },
    {
      state: "West Bengal",
      image: State6,
    },
    {
      state: "Jaipur",
      image: State7,
    },
    {
      state: "South India",
      image: State8,
    }
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
  }

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
      <HeroSec item={item} />
      <MinorSec item={item}/>
      <div className="hero3 h-[120vh] w-full flex flex-col py-16">
        <Mid2 />
        <div className="cards w-full h-[100vh] flex justify-center items-center">
          <div className="inner w-[90%] h-full flex flex-col justify-center items-center gap-3">
            <div className="one flex">
              <Card image={image} />
              <Card image={image} />
              <Card image={image} />
              <Card image={image} />
              <Card image={image} />
            </div>
            <div className="two flex">
              <Card image={image} />
              <Card image={image} />
              <Card image={image} />
              <Card image={image} />
              <Card image={image} />
            </div>
          </div>
        </div>
      </div>
      <Frames5 />
      <SubFooter />
      <Footer />
    </>
  )
}

export default Gallery
