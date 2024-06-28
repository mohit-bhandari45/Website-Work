import React, { useEffect, useState } from 'react'
import { Slide, Fade, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { getImagesHerosec } from '../../apis/apis';

const HeroSec = () => {
  const [images, setImages] = useState([])

  async function getImages() {
    let req = await fetch(getImagesHerosec)
    let res = await req.json()
    setImages(res)
  }

  useEffect(() => {
    getImages()
  }, [])


  return (
    <div className="slide-container">
      <Fade duration="2000" arrows={false} pauseOnHover={false}>
        {images.map((img) => {
          return <img className='w-[95%] h-[62vh] mx-auto' src={`${getImagesHerosec}/${img}`} />
        })}
      </Fade>
    </div>
  )
}

export default HeroSec
