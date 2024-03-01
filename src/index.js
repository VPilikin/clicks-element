import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Password from './Password'
import Clicks from './Clicks'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="clicks" element={<Clicks />} />
        <Route path="*" element={<Password />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
