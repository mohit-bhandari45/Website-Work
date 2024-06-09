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
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="1013003077692-bp8uca4g508sh0ejjmr2uichvo62t6nh.apps.googleusercontent.com">
        <RouterProvider router={router}></RouterProvider>
    </GoogleOAuthProvider>
)