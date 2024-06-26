import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
import { BooleanProvider } from './context/context'

/* Firebase */
import { app } from './firebase'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { getFirestore, collection, where, query, getDocs } from "firebase/firestore"
const auth = getAuth(app)
const firestore = getFirestore(app)

const App = () => {
  const [userType, setUserType] = useState()

  const getUserType = async (user) => {
    const usersRef1 = collection(firestore, "users");
    const q1 = query(usersRef1, where("email", "==", user.email));
    let querySnapshot = await getDocs(q1);
    if (querySnapshot.empty) {
      const usersRef2 = collection(firestore, "artist");
      const q2 = query(usersRef2, where("email", "==", user.email));
      querySnapshot = await getDocs(q2);
    }
    return querySnapshot;
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
      }
    })
  })

  const getProfileComponent = () => {
    if (userType === 'artist') {
      return <ArtistProfile />;
    } else if (userType === 'user') {
      return <UserProfile />;
    }
  }

  const getCartComponent = () => {
    if (userType === 'user') {
      return <ShoppingCart />;
    } else if (userType === 'artist') {
      return <Page404 />;
    }
  }

  const getCheckoutComponent = () => {
    if (userType === 'user') {
      return <Checkout />;
    } else if (userType === 'artist') {
      return <Page404 />;
    }
  }

  return (
    <BooleanProvider>
      <BrowserRouter>
        <Routes>

          /* General Routes-But here noraml user can signup */
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/showmore' element={<ShowMore />} />
          <Route path='/404' element={<Page404 />} />

          /* Artist Routes */
          <Route path='/artistsignup' element={<ArtistSignup />} />
          
          /* Profiles depending upon userType */
          <Route path='/profile' element={getProfileComponent()} />

          /* UserRoutes */
          <Route path='/cart' element={getCartComponent()} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/checkout' element={getCheckoutComponent()} />
          <Route path='/productdetails' element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </BooleanProvider>
  )
}

export default App
