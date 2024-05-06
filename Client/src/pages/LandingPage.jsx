import Navbar from '../components/LandingPageComp/Navbar'
import Body from '../components/LandingPageComp/Body'
import { useState } from 'react'
import Search from '../components/UniversalComp/Search'
import HeroSec from '../components/LandingPageComp/HeroSec'
import Herosec2 from '../components/LandingPageComp/Herosec2'
import PotSec from '../components/LandingPageComp/PotSec'
import Frames from '../components/LandingPageComp/Frames'
import Mid from '../components/LandingPageComp/Mid'
import Frames2 from '../components/LandingPageComp/Frames2'
import Frames3 from '../components/LandingPageComp/Frames3'
import Mid2 from '../components/LandingPageComp/Mid2'
import Mid3 from '../components/LandingPageComp/Mid3'
import Frames4 from '../components/LandingPageComp/Frames4'
import Frames5 from '../components/LandingPageComp/Frames5'
import Frames6 from '../components/LandingPageComp/Frames6'
import Footer from '../components/LandingPageComp/Footer'

function LandingPage() {
  const [, set] = useState()
  return (
    <>
        <Navbar/>
        <Search/>
        <HeroSec/>
        <Herosec2/>
        <PotSec/>
        <Frames/>
        <Mid/>
        <Frames2/>
        <Mid2/>
        <Frames3/>
        <Mid3/>
        <Frames4/>
        <Frames5/>
        <Frames6/>
        <Footer/>
        {/* <Body/> */}
        {/* <Login/> */}
        {/* <Signup /> */}
    </>
  )
}

export default LandingPage
