import React from 'react'
import Navbar from '../../components/ArtistPageComps/UniversalComps/Navbar'
import HeroSection from '../../components/ArtistPageComps/PickUpComps/HeroSection'
import ArtworkDetails from '../../components/ArtistPageComps/PickUpComps/ArtworkDeatils'
import PaymentAndPickup from '../../components/ArtistPageComps/PickUpComps/PaymentAndPickup'
import PickupSummary from '../../components/ArtistPageComps/PickUpComps/PickupSummary'

const PickUpPage = () => {
  return (
    <>
      <Navbar sign={false} />
      <HeroSection />
      <ArtworkDetails />
      <PaymentAndPickup/>
      <PickupSummary/>
    </>
  )
}

export default PickUpPage
