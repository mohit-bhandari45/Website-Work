import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';

/* Pages */
import About from './pages/About';
import Contacts from './pages/Contacts';
import Gallery from './pages/Gallery';
import LandingPage from './pages/LandingPage';
import Page404 from './pages/Page404';
import ShowMore from './pages/ShowMore';
import ArtistProfile from './pages/artist/ArtistProfile';
import ArtistSignup from './pages/artist/ArtistSignup';
import Checkout from './pages/user/Checkout';
import ProductDetails from './pages/user/ProductDetails';
import ShoppingCart from './pages/user/ShoppingCart';
import UserProfile from './pages/user/UserProfile';
import WishList from './pages/user/WishList';

/* Context API */
import { useBooleanContext } from './context/context';
import { getUserType } from "./helper/auth";


import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebase';
import BlogsAndPost from './pages/artist/BlogsAndPost';
import DashBoard from './pages/artist/DashBoard';
import HomePage from './pages/artist/HomePage';
import PickUpPage from './pages/artist/PickUpPage';
import ProductList from './pages/artist/ProductList';
import Home from './pages/user/Home';
import UploadedProducts from './pages/artist/UploadedProducts';
import SalesAnalysis from './pages/artist/SalesAnalysis';
const auth = getAuth(app)

const App = () => {
  const { authBool, userType, setUserType, setUser, token, setToken,type,user,setType } = useBooleanContext()
  
  if(localStorage.getItem("type")){
    setType(localStorage.getItem("type"))
    setUserType(localStorage.getItem("userType"))
  }
  console.log(type)

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        user.getIdToken().then((token) => {
          setToken(token)
          console.log(token)
        })
        const querySnapshot = await getUserType(user);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            let details = { ...doc.data() }
            setUserType(details.userType)
            setUser(details)
          })
        }
      } else {
        setUserType(null)
      }
    })
  }, [authBool])
  console.log(userType)

  const getHome = () => {
    if (type && !user) {
      if (type === "shop") {
        return <Home />
      } else if (type === 'sell') {
        return <HomePage />
      }
      return;
    }
    if (userType === undefined) {
      return <div>
        <Loader center size='lg' speed='slow' />
      </div>
    }
    if (userType === 'user') {
      return <Home />
    } else if (userType === 'artist') {
      return <HomePage />
    }
  }

  const getProfileComponent = () => {
    if (userType === undefined) {
      return <div>
        <Loader center size='lg' speed='slow' />
      </div>
    }
    if (userType === null) {
      return <Page404 />
    }
    if (userType === 'artist') {
      return <ArtistProfile />
    } else if (userType === 'user') {
      return <UserProfile />
    }
  }

  const getCartComponent = () => {
    if (userType === undefined) {
      return <div className='text-center flex justify-center items-center'>
        <Loader center size='lg' speed='slow' />
      </div>
    }
    if (userType === null) {
      return <Page404 />
    }
    if (userType === 'user') {
      return <ShoppingCart />
    } else if (userType === 'artist') {
      return <Page404 />
    }
  }

  const getCheckoutComponent = () => {
    if (userType === undefined) {
      return <div>
        <Loader center size='lg' speed='slow' />
      </div>
    }
    if (userType === null) {
      return <Page404 />
    }
    if (userType === 'user') {
      return <Checkout />
    } else if (userType === 'artist') {
      return <Page404 />
    }
  }

  const getWishlistComponent = () => {
    if (userType === undefined) {
      return <div>
        <Loader center size='lg' speed='slow' />
      </div>
    }
    if (userType === null) {
      return <Page404 />
    }
    if (userType === 'user') {
      return <WishList />
    } else if (userType === 'artist') {
      return <Page404 />
    }
  }

  const getContactComponent = () => {
    if (userType === undefined) {
      return <div>
        <Loader center size='lg' speed='slow' />
      </div>
    }
    if (userType === null) {
      return <Page404 />
    }
    if (userType === 'user') {
      return <Contacts />
    } else if (userType === 'artist') {
      return <Page404 />
    }
  }

  const getShowMore = () => {
    if (userType === undefined) {
      return <div>
        <Loader center size='lg' speed='slow' />
      </div>
    }
    if (userType === null) {
      return <Page404 />
    }
    if (userType === 'user') {
      return <ShowMore />
    } else if (userType === 'artist') {
      return <Page404 />
    }
  }

  return (
    /* Done means responsiveness is done */
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<LandingPage />} />  //done

        /* General Routes-But here normal user can signup */
        <Route path='/home' element={getHome()} />  //done  //main

        <Route path='/about' element={<About />} />
        <Route path='/contact' element={getContactComponent()} />
        <Route path='/showmore' element={getShowMore()} />
        <Route path='/404' element={<Page404 />} />

        /* Dynamic Routes */
        <Route path='/productdetails/:id' element={<ProductDetails />} />
        <Route path="/gallery/:id" element={<Gallery />} />

        /* Artist Routes */
        <Route path='/artistsignup' element={<ArtistSignup />} />
        <Route path='/dashboard' element={<DashBoard />} />
        {/* //done(hamburger-remain) */}
        <Route path='/product-list' element={<ProductList />} />   //done
        <Route path='/uploaded-products' element={<UploadedProducts />} />   //done
        <Route path='/pick-up' element={<PickUpPage />} />   //done
        <Route path='/sales-analysis' element={<SalesAnalysis />} />   //done
        <Route path='/blogs-posts' element={<BlogsAndPost />} />

        /* Profiles depending upon userType */
        <Route path='/profile' element={getProfileComponent()} />

        /* UserRoutes */
        <Route path='/cart' element={getCartComponent()} />
        <Route path='/wishlist' element={getWishlistComponent()} />
        <Route path='/checkout' element={getCheckoutComponent()} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
