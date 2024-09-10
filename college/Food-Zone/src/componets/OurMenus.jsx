import React from 'react'
import { NavLink } from 'react-router-dom'
import Blog_1 from '../assets/Blog_1.jpg'
import asset_2 from '../assets/asset_2.jpeg'
import Blog_6 from '../assets/Blog_6.jpg'
import Blog_7 from '../assets/Blog_7.jpg'
import magic_1 from '../assets/magic_1.jpg'

import experiancefood from '../assets/experiancefood.jpg'
import Logo from './Logo.jsx'

// icons
import { FaTripadvisor } from "react-icons/fa";
const SaladCard = ({ image, name, description, smallPrice, largePrice }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">Small ${smallPrice}</span>
          <span className="text-sm font-semibold">Large ${largePrice}</span>
        </div>
      </div>
    </div>
  );
};


export function Ourmenus() {
  const salads = [
    {
      image: { asset_2 },
      name: "Guacamole Greens",
      description:
        "Roasted , avocado, tomatoes, red onions, shredded cabbage",
      smallPrice: 8.0,
      largePrice: 12.0,
    },
    {
      image: { magic_1 },
      name: "Harvest Bowl",
      description:
        "Roasted , roasted sweet potatoes, apples, goat cheese",
      smallPrice: 7.0,
      largePrice: 10.0,
    },
    {
      image: { Blog_6 },
      name: "Summer Asian Slaw",
      description:
        "Pickled carrots, celery, tomatoes, cilantro, blue cheese, za’atar",
      smallPrice: 10.0,
      largePrice: 14.0,
    },
    {
      image: { Blog_7 },
      name: "Shredded Brussels Sprout",
      description:
        "Raw beets, cucumbers, basil, sunflower seeds, warm wild rice, shredded kale",
      smallPrice: 9.0,
      largePrice: 13.0,
    },
  ];


  const dishes = [
    {
      name: "Miso Salmon",
      description: "Roasted steelhead, hot roasted sweet potatoes, kale cabbage slaw",
      smallPrice: "$29.0",
      largePrice: "$39.0",
      imageUrl: "https://your-image-source/miso-salmon.jpg", // Replace with your actual image link
    },
    {
      name: "Fish Taco",
      description: "Salmon, avocado, shredded cabbage, cilantro, tortilla chips, warm quinoa, arugula",
      smallPrice: "$24.0",
      largePrice: "$34.0",
      imageUrl: "https://your-image-source/fish-taco.jpg", // Replace with your actual image link
    },
    {
      name: "Italian Pasta Soup",
      description: "Red onions, basil, za’atar breadcrumbs, chopped romaine, shredded kale, pesto vinaigrette",
      smallPrice: "$21.0",
      largePrice: "$31.0",
      imageUrl: "https://your-image-source/italian-pasta-soup.jpg", // Replace with your actual image link
    },
    {
      name: "Blackened Fish Bowl",
      description: "Shredded cabbage, raw carrots, red onions, basil, sunflower seeds, warm wild rice, baby spinach",
      smallPrice: "$19.0",
      largePrice: "$29.0",
      imageUrl: "https://your-image-source/blackened-fish-bowl.jpg", // Replace with your actual image link
    },
  ];


  return (
    <>
      <div className="w-full sm:container sm:m-auto sm:px-14">

        {/* Learn More */}
        <div className=" mb-10 ">
          {/* heading */}
          <div className="flex justify-center mt-10">
            <h1 className='text-wrap font-bold text-3xl sm:text-4xl md:7xl'>Flavour so good you'll <br />try to eat with your eyes</h1>
          </div>

          {/* image  */}

          <img src={Blog_1} alt="" className='w-full rounded-3xl mt-10' />

          {/* text  */}

          <div className="md:flex  justify-between gap-5 sm:gap-40 w-full  ">
            <div className=" mt-5">
              <h1 className='text-wrap font-bold text-3xl sm:text-4xl md:5xl'>A place where food, design, and ambiance come together to create a memorable experience.</h1>
              <NavLink to={'/AboutUs'}>
                <button className='hover:bg-[#E6FF55] hover:text-green-950 hover:border-none px-8 py-3 mt-5 border border-black rounded-full'>Learn More</button>
              </NavLink>
            </div>
            <div className="mt-5  ">
              <p className='tetx-2xl'>Whether you want to add more plant-based meals to your diet or are simply looking to change up your salad game, you’ll find tons of inspiration in the salad recipes below. </p>
            </div>
          </div>
        </div>

        {/* Salads  */}

        <div className="bg-gradient-to-tr bg-pink-100  p-6">
          <h2 className="text-3xl font-bold  mb-8">Salads</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {salads.map((salad, index) => (
              <SaladCard key={index} {...salad} />
            ))}
          </div>
        </div>

        {/* Main Dishes  */}

        <div className="bg-gray-50 py-8 px-4">
          <h1 className=" text-3xl font-bold mb-8">Main Dishes</h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dishes.map((dish, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={dish.imageUrl}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{dish.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-green-600">Small {dish.smallPrice}</span>
                    <span className="text-sm font-semibold text-green-600">Large {dish.largePrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* experience food */}

        <div className="mt-6 flex flex-col md:flex-row bg-[#f5eeda] p-8 rounded-lg md:h-[450px] md:w-full gap-6">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src={experiancefood}
              alt="Salad with Dressing"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center ">
            <h1 className="  text-3xl md:text-5xl font-bold text-gray-800 mb-4">A new way to  experience food</h1>
            <p className="text-xl md:text-3xl text-gray-600">
              Enjoy our seasonal menu  and experience the beauty  of naturalness.
            </p>
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

      </div >



    </>
  )
}

export default Ourmenus
