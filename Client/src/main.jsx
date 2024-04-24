import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider,createBrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx'

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/contact",
        element:<About/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
