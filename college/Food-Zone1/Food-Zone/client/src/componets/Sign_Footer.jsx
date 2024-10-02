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
            <footer className="bg-green-500 text-white pt-10 pb-8 px-4 rounded-2xl">
                {/* Container */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Column 1 - Logo and Description */}
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Foodyzone</h2>
                        <p className="text-sm">
                            Discover the best vegetarian fast food on Foodyzone. We bring delicious, healthy, and mouth-watering options to satisfy all your cravings.
                        </p>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                        <ul>
                            <li>
                                <a href="/" className="hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="/OurMenus" className="hover:underline">Our Menus</a>
                            </li>
                            <li>
                                <a href="/aboutUs" className="hover:underline">About Us</a>
                            </li>
                            <li>
                                <a href="/ContactUs" className="hover:underline">Contact</a>
                            </li>
                            <li>
                                <a href="/Cart" className="hover:underline">Cart</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Newsletter */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Subscribe to our Newsletter</h3>
                        <p className="text-sm mb-4">
                            Stay updated with the latest menu items, discounts, and promotions.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-700"
                            />
                            <NavLink to={'/SignUp'}>
                                <button className="bg-white text-green-500 px-4 py-2 rounded-r-lg hover:bg-gray-100">
                                    Subscribe
                                </button>
                            </NavLink>
                        </form>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="mt-10 border-t border-white pt-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
                    <p className="mb-4 md:mb-0">© 2024 Foodyzone. All Rights Reserved.</p>
                    <div className="space-x-6">
                        <a href="#" className="hover:text-gray-300">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default Sign_Footer
