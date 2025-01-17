import React from 'react'
import { Link , Outlet } from 'react-router-dom'

const ContactUs = () => {
    return (
        <div>
            <h1 className='heading'>This is ContactUs Page</h1>
            <Link to='FAQ' className='heading mt-5'>FAQ</Link>
            <Link to='Error' className='heading'>Error</Link>
            <Outlet/>
        </div>

    )
}

export default ContactUs
