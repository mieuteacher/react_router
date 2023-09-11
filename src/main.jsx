import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
/* Bước 1 bọc dự án bên trong Browser Component */
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
