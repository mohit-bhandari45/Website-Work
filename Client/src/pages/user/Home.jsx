import 'animate.css'
import { useEffect, useState } from 'react'

/* Toasts */
import { toast } from 'react-toastify'
import toastOptions from "../../helper/toastOptions"

/* Context API */
import { useBooleanContext } from '../../context/context'

/* Firebase */
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import AcrilicTransition from "../../components/UserPageComps/HomePageComps/AcrilicTransitions"
import ComingSoon from "../../components/UserPageComps/HomePageComps/ComingSoon"
import Explore from '../../components/UserPageComps/HomePageComps/Explore'
import NewArrival from '../../components/UserPageComps/HomePageComps/NewArrival'
import StateArts from '../../components/UserPageComps/HomePageComps/StateArts'
import Stories from '../../components/UserPageComps/HomePageComps/Stories'
import PhoneVerify from '../../components/UserPageComps/HomePageComps/Subcomps/PhoneVerify'
import Testimonials from '../../components/UserPageComps/HomePageComps/Testimonials'
import { app } from '../../firebase'
import BrowseCategory from '../../components/UserPageComps/HomePageComps/BrowseCategory'
import Navbar from '../../components/UserPageComps/HomePageComps/Navbar'
import Search from '../../components/UniversalComp/Search'
import HeroSec from '../../components/UserPageComps/HomePageComps/HeroSec'
import PotSec from '../../components/UserPageComps/HomePageComps/PotSec'
import Titles from '../../components/UserPageComps/HomePageComps/Titles'
import SubFooter from '../../components/UserPageComps/HomePageComps/SubFooter'
import Footer from '../../components/UniversalComp/Footer'
import FlashSales from '../../components/UserPageComps/HomePageComps/FlashSales'
const auth = getAuth(app)

function Home() {
  const { boolPopPhone, toastBool, phoneToastBool, setToastBool, setBoolPopPhone, setPhoneToastBool, boolPop, setBoolPop } = useBooleanContext()
  const [bool, setbool] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setTimeout(() => {
          setBoolPop(true)
        }, 5000);
      }
    })
  }, [])

  useEffect(() => {
    if (toastBool) {
      toast.success('Signed Up Successfully', toastOptions)
      setTimeout(() => {
        setBoolPopPhone(true)
        setToastBool(false);
      }, 2000)
    }
  }, [toastBool]);

  useEffect(() => {
    if (phoneToastBool && !toastBool) {
      toast.success('Phone Number added Successfully', toastOptions)
      setPhoneToastBool(false);
    }
  }, [phoneToastBool]);

  return (
    <div>
      {boolPop && !bool && <div className="popup absolute w-full h-[100vh] z-40 flex justify-center items-center">
        <div className="bgblack bg-black w-full h-full absolute opacity-50 transition-all duration-500 ease-in-out"></div>
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50 w-full h-full">
          <div className="bg-white rounded shadow-lg animate__animated animate__zoomIn flex flex-col gap-8 justify-start items-center w-[40%] z-60 h-[40%]">
            <div className="cross w-full h-[20%] flex justify-end items-center px-3">
              <div className='cursor-pointer'><svg className='' onClick={() => { setBoolPop(false) }} xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="30" height="30" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fJjczH"><title>cross</title><path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path></svg></div>
            </div>
            <p className="text-4xl font-[Helvetica]">Sign up to be a part of Acrilic</p>
            <button onClick={() => {
              setbool(true)
              setBoolPop(false)
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
      <AcrilicTransition />
      <PotSec />
      <Stories />
      <BrowseCategory />
      <FlashSales />
      <Titles title="COMING SOON !" h="10vh" />
      <ComingSoon />
      <Titles title="State Arts" h="20vh" />
      <StateArts />
      <Titles title="BESTSELLER" h="25vh" />
      <NewArrival />
      <Explore />
      <Testimonials />
      <SubFooter />
      <Footer />
    </div>
  )
}

export default Home
