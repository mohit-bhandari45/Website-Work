import React, { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const HeroSec = () => {
  const [images, setImages] = useState([
    { image: "Component 1.png" },
    { image: "close-up-oil-paints-brushes-palette 1.png" },
    { image: "graffiti-508272 1.png" },
    { image: "painting-3995999 1.png" }
  ]);

  return (
    <div className="slide-container">
      <Fade duration={2000} arrows={false} pauseOnHover={false}>
        {images.map((img, index) => (
          <div key={index} className="each-fade">
            <div className="image-container">
              <img className="w-full h-auto mx-auto max-h-[62vh]" src={`src/assets/${img.image}`} alt={`Slide ${index}`} />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default HeroSec;
