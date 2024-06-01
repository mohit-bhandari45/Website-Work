import React, { useState } from 'react'
import { Slide,Fade,Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const HeroSec = () => {
  const [images, setimages] = useState([
    {
      "image": "Component 1.png"
    },
    {
      "image": "close-up-oil-paints-brushes-palette 1.png"
    },
    {
      "image": "graffiti-508272 1.png"
    },
    {
      "image": "painting-3995999 1.png"
    }
  ])

  return (
    <div className="slide-container">
      <Fade duration="2000" arrows={false} pauseOnHover={false}>
        {images.map((img) => {
          return <img className='w-[95%] h-[62vh] mx-auto' src={`src/assets/${img.image}`} />
        })}
      </Fade>
    </div>
  )
}

export default HeroSec
