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
import ShoppingCart from './pages/ShoppingCart.jsx'


const router = createBrowserRouter([
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
        path: "/shoppingcart",
        element: <ShoppingCart/>
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="1013003077692-bp8uca4g508sh0ejjmr2uichvo62t6nh.apps.googleusercontent.com">
        <RouterProvider router={router}></RouterProvider>
    </GoogleOAuthProvider>
)