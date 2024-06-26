import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import LandingPage from './pages/LandingPage.jsx'
import Catalog from './pages/Catalog.jsx'
import Contacts from './pages/Contacts.jsx'
import Gallery from './pages/Gallery.jsx'
import ShowMore from './pages/ShowMore.jsx'
import ShoppingCart from './pages/user/ShoppingCart.jsx'
import ArtistSignup from './pages/artist/ArtistSignup.jsx'
import UserProfile from './pages/user/UserProfile.jsx'
import ArtistProfile from './pages/artist/ArtistProfile.jsx'
import WishList from './pages/user/WishList.jsx'
import Checkout from './pages/user/Checkout.jsx'
import ProductDetails from './pages/user/ProductDetails.jsx'
import Page404 from './pages/Page404.jsx'

/* Context API */
import { BooleanProvider } from './context/context.jsx'

const router = createBrowserRouter([
    //in this landing page, the user authentication will also happen
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/catalog",
        element: <Catalog/>
    },
    {
        path: "/contact",
        element: <Contacts/>
    },
    {
        path: "/gallery",
        element: <Gallery/>
    },
    {
        path: "/showmore",
        element: <ShowMore/>
    },
    {
        path: "/404",
        element: <Page404/>
    },

    //artist routes
    {
        path: "/artistsignup",
        element: <ArtistSignup />
    },
    {
        path: "/artistprofile",
        element: <ArtistProfile />
    },

    //userroutes
    {
        path: "/shoppingcart",
        element: <ShoppingCart/>
    },
    {
        path: "/userprofile",
        element: <UserProfile/>
    },
    {
        path: "/wishlist",
        element: <WishList/>
    },
    {
        path: "/checkout",
        element: <Checkout/>
    },
    {
        path: "/productdetails",
        element: <ProductDetails/>
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="1013003077692-bp8uca4g508sh0ejjmr2uichvo62t6nh.apps.googleusercontent.com">
        <BooleanProvider>
        <RouterProvider router={router}></RouterProvider>
        </BooleanProvider>
    </GoogleOAuthProvider>
)