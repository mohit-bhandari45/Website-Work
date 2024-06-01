import Navbar from '../components/LandingPageComp/Navbar'
import { useState } from 'react'
import Search from '../components/UniversalComp/Search'
import HeroSec from '../components/LandingPageComp/HeroSec'
import Herosec2 from '../components/LandingPageComp/Herosec2'
import PotSec from '../components/LandingPageComp/PotSec'
import Frames from '../components/LandingPageComp/Frames'
import Mid from '../components/LandingPageComp/Mid'
import Frames2 from '../components/LandingPageComp/Frames2'
import Frames3 from '../components/LandingPageComp/Frames3'
import Frames4 from '../components/LandingPageComp/Frames4'
import Footer from '../components/LandingPageComp/Footer'
import FramesLast from '../components/LandingPageComp/FramesLast'
import FlashSales from '../components/LandingPageComp/FlashSales'
import BrowseCategory from '../components/LandingPageComp/BrowseCategory'
import Frames5 from '../components/LandingPageComp/Frames5'

function LandingPage() {
  const [, set] = useState()
  return (
    <>
      <Navbar />
      <Search />
      <HeroSec />
      <Herosec2 />
      <PotSec />
      <Frames />
      <BrowseCategory/>
      <FlashSales />
      <Mid title="COMING SOON !" />
      <Frames2 />
      <Mid title="State Arts" />
      <Frames3 />
      <Mid title="BESTSELLER" />
      <Frames4 />
      <Frames5/>
      <FramesLast />
      <Footer />
    </>
  )
}

export default LandingPage
