import React from 'react';
import Card2 from './Subcomps/Card2';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Frames3 = () => {
  const details = [
    {
      state: "Delhi",
      image: "src/assets/Ellipse 54 (4).png",
    },
    {
      state: "Punjab",
      image: "src/assets/Ellipse 54 (5).png",
    },
    {
      state: "Delhi",
      image: "src/assets/Ellipse 54 (6).png",
    },
    {
      state: "Odisha",
      image: "src/assets/Ellipse 54 (7).png",
    },
    {
      state: "Maharashtra",
      image: "src/assets/Ellipse 54 (8).png",
    },
    {
      state: "West Bengal",
      image: "src/assets/Ellipse 54 (9).png",
    },
    {
      state: "Jaipur",
      image: "src/assets/Ellipse 54 (10).png",
    },
    {
      state: "South India",
      image: "src/assets/Ellipse 54 (11).png",
    },
  ];

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
    <div className="w-full px-4 py-8">
      <Carousel
        autoPlay={true}
        centerMode={true}
        infinite
        showDots={true}
        arrows={false}
        keyBoardControl={true}
        shouldResetAutoplay={true}
        focusOnSelect={true}
        autoPlaySpeed={1500}
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {details.map((detail, index) => (
          <div key={index} className="flex justify-center items-center">
            <Card2 state={detail.state} image={detail.image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Frames3;
