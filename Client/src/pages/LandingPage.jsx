import Navbar from '../components/LandingPageComp/Navbar';
import { useEffect, useState } from 'react';
import Search from '../components/UniversalComp/Search';
import HeroSec from '../components/LandingPageComp/HeroSec';
import Herosec2 from '../components/LandingPageComp/Herosec2';
import PotSec from '../components/LandingPageComp/PotSec';
import Frames from '../components/LandingPageComp/Frames';
import Mid from '../components/LandingPageComp/Mid';
import Frames2 from '../components/LandingPageComp/Frames2';
import Frames3 from '../components/LandingPageComp/Frames3';
import Frames4 from '../components/LandingPageComp/Frames4';
import Footer from '../components/UniversalComp/Footer';
import FramesLast from '../components/LandingPageComp/FramesLast';
import FlashSales from '../components/LandingPageComp/FlashSales';
import BrowseCategory from '../components/LandingPageComp/BrowseCategory';
import Frames5 from '../components/LandingPageComp/Frames5';
import SubFooter from '../components/LandingPageComp/SubFooter';
import 'animate.css';
import { ToastContainer, toast } from 'react-toastify';

/* Context API */
import { useBooleanContext } from '../context/context';

/* Firebase */
import { app } from '../firebase';
import { getAuth } from 'firebase/auth';
import PhoneVerify from '../components/LandingPageComp/Subcomps/PhoneVerify';

const auth = getAuth(app);

function LandingPage() {
  const [boolpop, setboolpop] = useState(false);
  const { boolPopPhone, toastBool, phoneToastBool, setToastBool } = useBooleanContext();
  const [bool, setbool] = useState(false);
  const { setBoolPopPhone } = useBooleanContext();

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    closeOnClick: true,
  };

  useEffect(() => {
    setTimeout(() => {
      setboolpop(false); //Revert it to true
    }, 5000);
  }, []);

  useEffect(() => {
    if (toastBool) {
      toast('Signed Up Successfully', { ...toastOptions, position: 'top-right' });
      
      setToastBool(false);
    }
  }, [toastBool, setToastBool]); 

  useEffect(() => {
    if (phoneToastBool && !toastBool) {
      toast('Phone Number added Successfully', { ...toastOptions, position: 'top-right' });
    }
  }, [phoneToastBool, toastBool]); 
  return (
    <div className="font-[Helvetica]">
      {boolpop && !bool && (
        <div className="popup fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">
          <div className="bg-black opacity-50 absolute w-full h-full"></div>
          <div className="bg-white rounded-lg shadow-lg animate__animated animate__zoomIn flex flex-col gap-8 justify-start items-center w-[80%] md:w-[40%] h-[40%] z-60 p-8">
            <div className="cross absolute top-0 right-0 p-3 cursor-pointer">
              <svg onClick={() => setboolpop(false)} xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="30" height="30" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fJjczH">
                <title>cross</title>
                <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
              </svg>
            </div>
            <p className="text-4xl">Sign up to be a part of Acrilic</p>
            <button onClick={() => {
              setbool(true);
              setboolpop(false);
            }} className="bg-[#18122B] text-xl text-white font-bold py-2 px-4 rounded hover:bg-[#2c2349]">
              Sign Up
            </button>
          </div>
        </div>
      )}
      {boolPopPhone && <PhoneVerify />}
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
  );
}

export default LandingPage;
