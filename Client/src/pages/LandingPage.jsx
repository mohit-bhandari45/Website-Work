import Navbar from '../components/LandingPageComp/Navbar'
import { useEffect, useState } from 'react'
import Search from '../components/UniversalComp/Search'
import HeroSec from '../components/LandingPageComp/HeroSec'
import Herosec2 from '../components/LandingPageComp/Herosec2'
import PotSec from '../components/LandingPageComp/PotSec'
import Frames from '../components/LandingPageComp/Frames'
import Mid from '../components/LandingPageComp/Mid'
import Frames2 from '../components/LandingPageComp/Frames2'
import Frames3 from '../components/LandingPageComp/Frames3'
import Frames4 from '../components/LandingPageComp/Frames4'
import Footer from '../components/UniversalComp/Footer'
import FramesLast from '../components/LandingPageComp/FramesLast'
import FlashSales from '../components/LandingPageComp/FlashSales'
import BrowseCategory from '../components/LandingPageComp/BrowseCategory'
import Frames5 from '../components/LandingPageComp/Frames5'
import SubFooter from '../components/LandingPageComp/SubFooter'
import 'animate.css';

import { ToastContainer, toast } from 'react-toastify'

/* Context API */
import { useBooleanContext } from '../context/context'

/* Firebase */
import { app } from '../firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import PhoneVerify from '../components/LandingPageComp/Subcomps/PhoneVerify'
const auth = getAuth(app)

function LandingPage() {
  const [boolpop, setboolpop] = useState(false)
  const { boolPopPhone, toastBool, phoneToastBool, setToastBool } = useBooleanContext()
  const [bool, setbool] = useState(false)
  const { setBoolPopPhone,setPhoneToastBool } = useBooleanContext()

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    closeOnClick: true,
  }

  useEffect(() => {
    setTimeout(() => {
      setboolpop(true)
    }, 5000);
  }, [])

  useEffect(() => {
    if (toastBool) {
      toast('Signed Up Successfully', { ...toastOptions, position: 'top-right' });
      // Resetting the toastBool state after showing the toast
      setToastBool(false);
    }
  }, [toastBool, setToastBool]); // Include setToastBool in the dependency array

  useEffect(() => {
    if (phoneToastBool && !toastBool) {
      toast('Phone Number added Successfully', { ...toastOptions, position: 'top-right' });
      setPhoneToastBool(false);
    }
  }, [phoneToastBool, toastBool]); // Depend on both phoneToastBool and toastBool to ensure correct behavior

  return (
    <div>
      {boolpop && !bool && <div className="popup absolute w-full h-[100vh] z-40 flex justify-center items-center">
        <div className="bgblack bg-black w-full h-full absolute opacity-50 transition-all duration-500 ease-in-out"></div>
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50 w-full h-full">
          <div className="bg-white rounded shadow-lg animate__animated animate__zoomIn flex flex-col gap-8 justify-start items-center w-[40%] z-60 h-[40%]">

            <div className="cross w-full h-[20%] flex justify-end items-center px-3">
              <svg className='cursor-pointer' onClick={() => { setboolpop(false) }} xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="30" height="30" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fJjczH"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg>
            </div>
            <p className="text-4xl font-[Helvetica]">Sign up to be a part of Acrilic</p>
            <button onClick={() => {
              setbool(true)
              setboolpop(false)
            }}
              className="bg-[#18122B] text-xl font-[Helvetica] hover:bg-[#2c2349] text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>}
      {boolPopPhone ? <PhoneVerify /> : ""}
      <Navbar bool={bool} setbool={setbool} />
      <Search />
      <HeroSec />
      <Herosec2 />
      <PotSec />
      <Frames />
      <BrowseCategory />
      <FlashSales />
      <Mid title="COMING SOON !" h="10vh" />
      <Frames2 />
      <Mid title="State Arts" h="20vh" />
      <Frames3 />
      <Mid title="BESTSELLER" h="25vh" />
      <Frames4 />
      <Frames5 />
      <FramesLast />
      <SubFooter />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default LandingPage
