import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import { Outlet } from 'react-router-dom'
import { useAuth } from "../Context/AuthContext"

const Navbar = () => {

    const { isAuth, setIsAuth } = useAuth();
    return (
        <>
            <div className='flex space-x-4 bg-orange-100 p-10 justify-center'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="AboutUs">Aboutus</NavLink>
                <NavLink to="Help">Help</NavLink>
                <NavLink to="Carrer">Carrer</NavLink>
                {
                    isAuth ? <button onClick={() => setIsAuth(false)}>Logout</button> :
                        <NavLink to="login">Login</NavLink>
                }
            </div>
            <Outlet />
        </>
    )
}

export default Navbar
