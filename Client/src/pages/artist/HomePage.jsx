import React, { useEffect, useState } from 'react'
import Navbar from '../../components/ArtistPageComps/UniversalComps/Navbar'
import HeroSection from '../../components/ArtistPageComps/HomePageComps/HeroSection'
import RoundCarousel from '../../components/ArtistPageComps/HomePageComps/RoundCarousel'
import FirstPic from "../../components/ArtistPageComps/HomePageComps/Ellipse 175.png"
import SecondPic from "../../components/ArtistPageComps/HomePageComps/Ellipse 176.png"
import FeatureGrid from '../../components/ArtistPageComps/HomePageComps/FeatureGrid'
import 'animate.css';
import { useBooleanContext } from '../../context/context'
import Search from '../../components/UniversalComp/Search'

const HomePage = () => {
  const { setRemove, setUserType,userType } = useBooleanContext()

  useEffect(() => {
    setRemove(false)
    setUserType(localStorage.getItem("userType"))
  }, [])


  const items = [
    { src: FirstPic, alt: 'Image 1' },
    { src: SecondPic, alt: 'Image 2' },
    { src: SecondPic, alt: 'Image 3' },
    { src: SecondPic, alt: 'Image 4' },
  ]

  return (
    <div className='animate__animated animate__fadeInUp'>
      <Navbar sign={true} />
      <HeroSection />
      <Search/>
      <div className="flex items-center justify-center">
        <RoundCarousel items={items} />
      </div>
      <FeatureGrid />
    </div>
  )
}

export default HomePage
