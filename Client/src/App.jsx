import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css'

/* Pages */
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Gallery from './pages/Gallery'
import ShowMore from './pages/ShowMore'
import Page404 from './pages/Page404'
import ArtistSignup from './pages/artist/ArtistSignup'
import ArtistProfile from './pages/artist/ArtistProfile'
import ShoppingCart from './pages/user/ShoppingCart'
import UserProfile from './pages/user/UserProfile'
import WishList from './pages/user/WishList'
import Checkout from './pages/user/Checkout'
import ProductDetails from './pages/user/ProductDetails'

/* Context API */
import { useBooleanContext } from './context/context'
import { getUserType } from './utils/auth';


import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebase';
const auth = getAuth(app)

const App = () => {
  const { authBool, userType, setUserType, setUser,token,setToken } = useBooleanContext()

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

  const getLandingPage = () => {
    if (userType === undefined) {
      return <div>
        <Loader center size='lg' speed='slow' />
      </div>
    }
    if (userType === null) {
      return <LandingPage />
    }
    if (userType === 'artist') {
      return <LandingPage />
    } else if (userType === 'user') {
      return <LandingPage />
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
    <BrowserRouter>
      <ToastContainer />
      <Routes>

        /* General Routes-But here normal user can signup */
        <Route path='/' element={getLandingPage()} />  //done
        <Route path='/about' element={<About />} />  /done
        <Route path='/contact' element={getContactComponent()} />  //done
        <Route path='/showmore' element={getShowMore()} />  //done
        <Route path='/404' element={<Page404 />} />

        /* Dynamic Routes */
        <Route path='/productdetails/:id' element={<ProductDetails />} />
        <Route path="/gallery/:id" element={<Gallery />} />

        /* Artist Routes */
        <Route path='/artistsignup' element={<ArtistSignup />} />

        /* Profiles depending upon userType */
        <Route path='/profile' element={getProfileComponent()} />

        /* UserRoutes */
        <Route path='/cart' element={getCartComponent()} /> //done
        <Route path='/wishlist' element={getWishlistComponent()} />
        <Route path='/checkout' element={getCheckoutComponent()} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
