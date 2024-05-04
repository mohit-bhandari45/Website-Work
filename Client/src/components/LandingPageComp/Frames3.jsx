import React from 'react'
import Card2 from './Subcomps/Card2'
import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Frames3 = () => {
  const [details, setdetails] = useState([
    {
      state: "Delhi",
      image: "/icons/Ellipse 54.png",
    },
    {
      state: "Uttarakhand",
      image: "/icons/Ellipse 54 (3).png",
    },
    {
      state: "Bihar",
      image: "/icons/Ellipse 54 (2).png",
    },
    {
      state: "Punjab",
      image: "/icons/Ellipse 54 (1).png",
    },
    {
      state: "Punjab",
      image: "/icons/Ellipse 54 (1).png",
    },
    {
      state: "Punjab",
      image: "/icons/Ellipse 54 (1).png",
    },
    {
      state: "Punjab",
      image: "/icons/Ellipse 54 (1).png",
    },
    {
      state: "Punjab",
      image: "/icons/Ellipse 54 (1).png",
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
      <Carousel autoPlay={true} showDots={true} keyBoardControl={true} shouldResetAutoplay={true} rewind={true} rewindWithAnimation={true} focusOnSelect={true} autoPlaySpeed={1500} className='' responsive={responsive}>
        {details.map((detail) => {
          return <Card2 state={detail.state} image={detail.image} />
        })}
      </Carousel>
  )
}

export default Frames3
