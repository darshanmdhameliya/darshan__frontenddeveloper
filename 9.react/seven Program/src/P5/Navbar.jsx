import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../index.css'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='flex space-x-4 bg-orange-100 p-10 justify-center'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="AboutUs">Aboutus</NavLink>
                <NavLink to='ContactUs'>ContactUs</NavLink>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar
