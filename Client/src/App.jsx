import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

/* Firebase */
import { app } from './firebase'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { getFirestore, collection, where, query, getDocs } from "firebase/firestore"
const auth = getAuth(app)
const firestore = getFirestore(app)

const App = () => {
  const [userType, setUserType] = useState(undefined)
  const { authBool } = useBooleanContext()

  const getUserType = async (user) => {
    if (!user.phoneNumber) {
      const usersRef1 = collection(firestore, "users");
      const q1 = query(usersRef1, where("email", "==", user.email));
      let querySnapshot = await getDocs(q1);
      if (querySnapshot.empty) {
        const usersRef2 = collection(firestore, "artists");
        const q2 = query(usersRef2, where("email", "==", user.email));
        querySnapshot = await getDocs(q2);
      }
      return querySnapshot;
    } else {
      const usersRef3 = collection(firestore, "users");
      const q3 = query(usersRef3, where("number", "==", user.phoneNumber));
      const querySnapshot = await getDocs(q3);
      return querySnapshot;
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const querySnapshot = await getUserType(user);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            let details = { ...doc.data() }
            setUserType(details.userType)
          });
        }
      } else {
        setUserType(null)
      }
    })
  }, [authBool])

  const getProfileComponent = () => {
    if (userType === undefined) {
      return <div>
        ...loading
      </div>
    }
    if (userType === null) {
      return <Page404 />
    }
    if (userType === 'artist') {
      return <ArtistProfile />;
    } else if (userType === 'user') {
      return <UserProfile />;
    }
  }

  const getCartComponent = () => {
    if (userType === undefined) {
      return <div className='text-center flex justify-center items-center'>
        ...loading
      </div>
    }
    if (userType === null) {
      return <Page404 />
    }
    if (userType === 'user') {
      return <ShoppingCart />;
    } else if (userType === 'artist') {
      return <Page404 />;
    }
  }

  const getCheckoutComponent = () => {
    if (userType === undefined) {
      return <div>
        ...loading
      </div>
    }
    if (userType === null) {
      return <Page404 />
    }
    if (userType === 'user') {
      return <Checkout />;
    } else if (userType === 'artist') {
      return <Page404 />;
    }
  }

  const getWishlistComponent = () => {
    if (userType === undefined) {
      return <div>
        ...loading
      </div>
    }
    if (userType === null) {
      return <Page404 />
    }
    if (userType === 'user') {
      return <WishList />;
    } else if (userType === 'artist') {
      return <Page404 />;
    }
  }

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>

        /* General Routes-But here normal user can signup */
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/showmore' element={<ShowMore />} />
        <Route path='/404' element={<Page404 />} />

        /* Dynamic Routes */
        <Route path='/productdetails/:id' element={<ProductDetails />} />
        <Route path="/gallery/:id" element={<Gallery />} />

        /* Artist Routes */
        <Route path='/artistsignup' element={<ArtistSignup />} />

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
