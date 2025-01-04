import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import { Outlet } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'

const Navbar = () => {
    return (
        <>
            <div className="p-4 bg-gray-500 text-white font-bold flex justify-center space-x-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/AboutUs">AboutUs</NavLink>
                <NavLink to="Help">Help</NavLink>
                <NavLink to="Carrer">Career</NavLink>
            </div>
            <main>
                <Breadcrumb />
                <Outlet />
            </main>

        </>
    )
}

export default Navbar
