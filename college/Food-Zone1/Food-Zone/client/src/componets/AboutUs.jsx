'use client'

import React from 'react'
import Blog_1 from '../assets/Blog_1.jpg'
import Blog_8 from '../assets/Blog_8.jpg'
import Blog_9 from '../assets/Blog_9.jpg'
import Blog_10 from '../assets/Blog_10.jpg'
import asset_5 from '../assets/asset_5.jpeg'


import Click1 from './Click1.jsx'
import Click2 from './Click2.jsx'
import Click3 from './Click3.jsx'

// footer 
import Sign_Footer from './Sign_Footer.jsx'
import { NavLink } from 'react-router-dom'

export function AboutUs() {

  const cards = [
    {
      image: Blog_9,
      title: "Food Sourcing",
      path: "/Click2",
    },
    {
      image: Blog_1,
      title: "Menu Development",
      path: "/Click1",
    },
    {
      image: Blog_10,
      title: "Restaurant",
      path: "/Click3",
    },
  ];


  const Card = ({ details }) => {
    return (
      <div className="relative  rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <NavLink to={details.path}>
          <img src={details.image} alt={details.title} className=" w-full h-full object-cover" />
          <div className="p-4 absolute bottom-0">
            <h3 className="text-white  text-2xl font-bold">{details.title}</h3>
          </div>
        </NavLink >
      </div>
    );
  };

  return (
    <div className="w-full sm:container sm:m-auto sm:px-14 p-3">

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
            <Card key={index} details={card} />
          ))}
        </div>
      </div>

      {/* footer  */}
      <Sign_Footer />

    </div>


  )
}

export default AboutUs

