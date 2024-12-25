import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="AboutUs">Aboutus</Link>
            <Link to="ContactUs">ContactUs</Link>
        </div>
    )
}

export default Navbar
