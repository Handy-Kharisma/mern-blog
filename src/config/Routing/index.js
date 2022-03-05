import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, Register } from '../../pages'

const Routing = () => {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login/>} />
            
            <Route path="/Register" element={<Register/>} />
            
            <Route path="/" element={<Home/>} />
        </Routes>
    </Router>
  )
}

export default Routing