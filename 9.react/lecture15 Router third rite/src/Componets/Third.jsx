import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Help from './Help'
import FAQ from './FAQ'
import CarrerLayout from './CarrerLayout'
import Carrer ,{CarrerLoader} from './Carrer'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='AboutUs' element={<AboutUs />} />
            <Route path='Help' element={<Help />}>
                <Route path='FAQ' element={<FAQ />} />
                <Route path='ContactUs' element={<ContactUs />} />
            </Route>
            <Route path='Carrer' element={<CarrerLayout/>}>
                    <Route index element={<Carrer/>} loader={CarrerLoader}/>
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