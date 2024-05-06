import React, { useState } from 'react'
import { Slide,Fade,Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const HeroSec = () => {
  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const [images, setimages] = useState([
    {
      "image": "/icons/Component 1.png"
    },
    {
      "image": "/icons/close-up-oil-paints-brushes-palette 1.png"
    },
    {
      "image": "/icons/graffiti-508272 1.png"
    },
    {
      "image": "/icons/painting-3995999 1.png"
    }
  ])

  return (
    <div className="slide-container">
      <Fade duration="2000" arrows={false} pauseOnHover={false}>
        {images.map((img) => {
          return <img className='w-[100%] h-[60vh]' src={img.image} />
        })}
      </Fade>
    </div>
  )
}

export default HeroSec
