import React from 'react'
import Card2 from './Subcomps/Card2'
import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Frames3 = () => {
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
    <Carousel autoPlay={true} infinite showDots={true} keyBoardControl={true} shouldResetAutoplay={true} focusOnSelect={true} autoPlaySpeed={1500} className='' responsive={responsive}>
      {details.map((detail) => {
        return <Card2 state={detail.state} image={detail.image} />
      })}
    </Carousel>
  )
}

export default Frames3
