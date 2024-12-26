import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const NewVersion = () => {
    const route = createBrowserRouter([
        {
            path: '/',
            element: <Navbar />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/AboutUs",
                    element: <AboutUs />
                },
                {
                    path: "/ContactUs",
                    element: <ContactUs />
                }
            ]
        }

    ])
    return (
        <div>
            <RouterProvider router={route} />
        </div>
    )
}

export default NewVersion
