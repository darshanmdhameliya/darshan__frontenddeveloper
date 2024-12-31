import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import AboutUs from './AboutUs'
import Search from './Search'
import ContactUs from './ContactUs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const OldVersion = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/Search" element={<Search/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default OldVersion
