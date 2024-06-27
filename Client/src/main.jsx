import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* Context API */
import { BooleanProvider } from './context/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BooleanProvider>
        <App />
    </BooleanProvider>
)