import Navbar from '../components/LandingPageComp/Navbar'
import Body from '../components/LandingPageComp/Body'
import Login from '../components/LandingPageComp/Login'
import Signup from '../components/LandingPageComp/Signup'
import { useState } from 'react'
import Search from '../components/LandingPageComp/Search'
import HeroSec from '../components/LandingPageComp/HeroSec'
import Herosec2 from '../components/LandingPageComp/Herosec2'
import PotSec from '../components/LandingPageComp/PotSec'

function LandingPage() {
  const [, set] = useState()
  return (
    <>
        <Navbar/>
        <Search/>
        <HeroSec/>
        <Herosec2/>
        <PotSec/>
        {/* <Body/> */}
        {/* <Login/> */}
        {/* <Signup /> */}
    </>
  )
}

export default LandingPage
