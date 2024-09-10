'use client'

import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

import Blog_1 from '../assets/Blog_1.jpg'
import Blog_8 from '../assets/Blog_8.jpg'
import Blog_9 from '../assets/Blog_9.jpg'
import Blog_10 from '../assets/Blog_10.jpg'
import asset_5 from '../assets/asset_5.jpeg'

// icons
import { FaTripadvisor } from "react-icons/fa";



export function AboutUs() {

  const cards = [
    {
      image: Blog_9,
      title: "Food Sourcing",
    },
    {
      image: Blog_1,
      title: "Menu Development",
    },
    {
      image: Blog_10,
      title: "Restaurant",
    },
  ];


  const Card = ({ image, title }) => {
    return (
      <div className="relative  rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <img src={image} alt={title} className=" w-full h-full object-cover" />
        <div className="p-4 absolute bottom-0">
          <h3 className="text-white  text-2xl font-bold">{title}</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full sm:container sm:m-auto sm:px-14">

      {/* heading */}

      <h1 className='font-bold text-6xl my-10 text-center'>About Us</h1>

      {/* OurMission  */}

      <div className="rounded-3xl   overflow-hidden flex flex-col md:flex-row  justify-center h-full   bg-[#FAF9F6]">
        {/* Left Side - Text */}
        <div className="order-last md:order-first bg-[#A5BFA4] flex flex-col  p-10 md:h-screen    w-full rounded-l-lg justify-between">
          <h3 className="text-lg text-gray-700 font-semibold mb-2">OUR MISSION</h3>
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl  font-semibold text-gray-900">
            A meal designed to be explored and experienced in the moment
          </h1>
        </div>
        {/* Right Side - Image */}
        <div className="h-screen w-full ">
          <img
            src={Blog_8}
            alt="Mission Dining"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* text  */}

      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0E150E] lg:text-5xl font-bold mb-6">
            We make a small, intimate, and inviting space for an unforgettable meal
          </h2>
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl">
            Convert leads into customers and then turn those customers into loyal
            fans of your brand by leveraging next-generation automation and AI.
            Yes, it really can be automated, and no, you’re not dreaming.
          </p>
        </div>
      </section>

      {/* Our story */}

      <div className="rounded-3xl   overflow-hidden flex flex-col md:flex-row  justify-center h-full   bg-[#FAF9F6] mb-10">
        {/* Left Side - Text */}
        <div className=" bg-[#A5BFA4] flex flex-col  p-10 md:h-screen    w-full rounded-r-lg justify-between">
          <h3 className="sm:text-xl text-gray-700 font-semibold mb-2">OUR STORY</h3>
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl  font-semibold text-gray-900">
            We’re not just a restaurant. We’re a cultural experience
          </h1>
        </div>
        {/* Right Side - Image */}
        <div className="order-first h-screen w-full ">
          <img
            src={asset_5}
            alt="Mission Dining"
            className="object-cover w-full h-full"
          />
        </div>
      </div>


      {/* text  */}

      <section className="bg-gray-50 mb-10 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0E150E] lg:text-5xl font-bold mb-6">
            Immerse yourself in an experience that transcends the ordinary
          </h2>
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl">
            In a world where the long- and short-term effects of climate change pose major challenges for farmers, the need for regenerative food systems has never been more important. That’s why we’ve made a promise to do more for the planet, by taking less. Our plant-forward menu means that we’re already on average 30% less carbon intensive than the average American meal.
          </p>
        </div>
      </section>


      {/* card  */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} image={card.image} title={card.title} />
          ))}
        </div>
      </div>


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


export default AboutUs