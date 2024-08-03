import React, { useEffect } from 'react'
import { useState } from 'react'
import Story from './Subcomps/Story'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getStories } from '../../apis/apis';

const Stories = () => {
    const [storyDetails, setStoryDetails] = useState([])
    async function getVideos() {
        let req = await fetch(getStories)
        let res = await req.json()
        setStoryDetails(res)
    }

    useEffect(() => {
        getVideos()
    }, [])


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
            {storyDetails.map((storydetail,index) => {
                return <Story key={index} mainVideo={storydetail} />
            })}
        </Carousel>
    )
}

export default Stories
