import React from 'react';
import HeroSection from '../components/LandingPageComps/HeroSection';
import Navbar from '../components/LandingPageComps/Navbar';
import Bg from "../components/LandingPageComps/bg 3.png";
import Footer from '../components/UniversalComp/Footer';
import 'animate.css';
import { useBooleanContext } from '../context/context';

const LandingPage = () => {
  const { remove } = useBooleanContext()

  return (
    <div className={`animate__animated ${remove ? "animate__fadeOutUp" : ""}`}>
      <div className='w-full h-[100vh]'>
        <div className='absolute w-full h-[100vh]'>
          <img className='w-[100%] h-[100%] z-10' src={Bg} alt="" />
        </div>
        <Navbar />
        <HeroSection />
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage