import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import { ContactUs } from './ContactUs'
import SignUp from './SignUp'
import Cart from './Cart'
import Navbar1 from './Navbar'
import Order from './Order'
import Error from './Error'
import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '',
    element: <Navbar1 />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/aboutus',
        element: <AboutUs />
      },
      {
        path: '/contactus',
        element: <ContactUs />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/order',
        element: <Order />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
])



const RouterLayout = () => {
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  )
}

export default RouterLayout
