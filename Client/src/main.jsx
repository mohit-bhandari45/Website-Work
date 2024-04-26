import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/about",
        element: <About />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="1013003077692-bp8uca4g508sh0ejjmr2uichvo62t6nh.apps.googleusercontent.com">
        <RouterProvider router={router}></RouterProvider>
    </GoogleOAuthProvider>
)
