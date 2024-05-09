import React from 'react'
import { useState } from 'react'
import Story from './Subcomps/Story'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Frames = () => {
    const [storydetails, setstorydetails] = useState([
        {
            mainimage: "src/assets/Rectangle 52.png",
            image: "src/assets/Ellipse 40.png",
            name: "Ayushi",
            para: "One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta."
        },
        {
            mainimage: "src/assets/Rectangle 53.png",
            image: "src/assets/Ellipse 39.png",
            name: "Jack",
            para: "One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta."
        },
        {
            mainimage: "src/assets/Rectangle 54.png",
            image: "src/assets/Ellipse 51.png",
            name: "Tony",
            para: "One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta."
        },
        {
            mainimage: "src/assets/Rectangle 54.png",
            image: "src/assets/Ellipse 51.png",
            name: "Tony",
            para: "One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta."
        },
        {
            mainimage: "src/assets/Rectangle 54.png",
            image: "src/assets/Ellipse 51.png",
            name: "Tony",
            para: "One of the fathers of modern Indian art, a leading painter in India's nationalist art school in Calcutta."
        },
    ])
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
            <Carousel autoPlay={false} slidesToSlide={1} keyBoardControl={true} draggable={true} centerMode={true} infinite showDots={true} shouldResetAutoplay={true} focusOnSelect={true} autoPlaySpeed={1500} className='' responsive={responsive}>
            {storydetails.map((storydetail) => {
                return <Story mainimage={storydetail.mainimage} image={storydetail.image} name={storydetail.name} para={storydetail.para} />
            })}
        </Carousel>
    )
}

export default Frames
