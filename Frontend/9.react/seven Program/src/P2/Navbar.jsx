import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='flex space-x-4 bg-orange-100 p-10 justify-center'>
                <Link to="/">Home</Link>
                <Link to="/AboutUs">Aboutus</Link>
                <Link to="/ContactUs">ContactUs</Link>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar
