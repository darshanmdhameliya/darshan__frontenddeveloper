import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

// icons
import { FaTripadvisor } from "react-icons/fa";


const Sign_Footer = () => {
    return (    
        <div>
            {/* signUp */}

            <div className="grid lg:grid-cols-2 gap-5 my-10 p-5">
                <div className="">
                    <h1 className='font-bold text-3xl'>Keep up to date with us</h1>
                    <p>Sign up to be the first to receive special news and event updates from us.</p>
                </div>
                <div className="w-fit grid sm:grid-cols-2 sm:gap-x-12  md:gap-x-4 lg:gap-x-28 ">
                    <form action="">
                        <input className=' border border-black sm:text-xl rounded-xl p-4' type="email" placeholder='Your email address' />
                    </form>
                    <NavLink to={'/SignUp'}>
                        <button className='hover:bg-[#E6FF55] hover:text-green-950 px-5 mt-2 py-3 rounded-large bg-green-900 text-[#E6FF55]'>Sign up</button>
                    </NavLink>
                </div>
            </div>

            {/* Footer */}

            <footer className="bg-[#E9F0E7] rounded-xl py-10 px-6 mb-10">

                <div className="sm:flex justify-center mb-10 gap-5">
                    <h3 className="text-xl font-semibold my-2">Call us on +45 453 3432</h3>
                    <button className="hover:bg-[#E6FF55] hover:text-green-950 bg-[#08361B] text-[#EEFF00] px-8 py-2 rounded-full">
                        Make a Reservation
                    </button>
                </div>

                <div className="max-w-7xl  mx-auto flex flex-col lg:flex-row justify-between items-center">
                    {/* Left Section */}
                    <div className="sm:flex items-center sm:space-x-6">
                        {/* Logo */}
                        <div className="  ">
                            <Logo />
                        </div>

                        {/* Contact Information */}
                        <div>
                            <p className="mt-4 text-gray-700">Lake House, 13 Hanway, Square, London, UK</p>
                            <p className="text-gray-700">Monday-Wednesday: 11a-9p</p>
                            <p className="text-gray-700">Thursday-Saturday: 11a-10p</p>
                            <p className="text-gray-700">Happy Hour: Everyday 2p-6p</p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="mt-8 lg:mt-0  sm:flex sm:justify-between w-full lg:w-auto  lg:space-x-10">
                        <div className="text-gray-700 space-y-2">
                            <h4 className="font-semibold">About Us</h4>
                            <h4 className="font-semibold">Our Menus</h4>
                            <h4 className="font-semibold">Contact Us</h4>
                        </div>
                        <div className="text-gray-700 space-y-2">
                            <h4 className="font-semibold">Newsletter</h4>
                            <h4 className="font-semibold">Shop</h4>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-[4rem]  sm:flex justify-between">
                    <div className="">
                        <p className="text-sm text-gray-700 text-wrap">Copyright © Grand Restaurant Theme Demo by ThemeGoods</p>
                    </div>
                    <div className="flex sm:justify-center space-x-4 mt-5 sm:mt-0 ">
                        {/* Social Icons */}
                        <a href="#" className="text-[#08361B]">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-[#08361B]">
                            <i className="fab fa-yelp"></i>
                        </a>
                        <a href="#" className="text-[#08361B]">
                            <FaTripadvisor className='mt-1' />
                        </a>
                        <a href="#" className="text-[#08361B]">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Sign_Footer
