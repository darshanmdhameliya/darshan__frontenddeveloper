import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import FAQ from './FAQ'
import Error from './Error'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='AboutUs' element={<AboutUs />} />
            <Route path='ContactUs' element={<ContactUs />}>
                <Route path='FAQ' element={<FAQ />} />
                <Route path='Error' element={<Error />} />
            </Route>
        </Route>
    )
)

function Third() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
export default Third