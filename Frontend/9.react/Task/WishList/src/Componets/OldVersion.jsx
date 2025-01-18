import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import WishList from './WishList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const OldVersion = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Card />} />
                    <Route path="/WishList" element={<WishList />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default OldVersion
