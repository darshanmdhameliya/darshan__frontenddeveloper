import React from 'react'
import { NavLink } from 'react-router-dom'
import Blog_1 from '../assets/Blog_1.jpg'
import asset_2 from '../assets/asset_2.jpeg'
import Blog_6 from '../assets/Blog_6.jpg'
import Blog_7 from '../assets/Blog_7.jpg'
import magic_1 from '../assets/magic_1.jpg'
import miso_salmon from '../assets/miso_salmon.jpg'
import crunchy_taco from '../assets/crunchy_taco.jpg'
import italian_pasta from '../assets/italian_pasta.jpg'
import garlic_chili from '../assets/garlic_chili.jpg'
import experiancefood from '../assets/experiancefood.jpg'
import Logo from './Logo.jsx'

// icons
import { FaTripadvisor } from "react-icons/fa";

// footer 
import Sign_Footer from './Sign_Footer.jsx'


const SaladCard = ({ image, name, description, smallPrice, largePrice }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
      <NavLink to={'/Cart'}>
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
      </NavLink>
    </div>
  );
};


export function Ourmenus() {
  const salads = [
    {
      image: asset_2,
      name: "Guacamole Greens",
      description:
        "Roasted , avocado, tomatoes, red onions, shredded cabbage",
      smallPrice: 8.0,
      largePrice: 12.0,
    },
    {
      image: magic_1,
      name: "Harvest Bowl",
      description:
        "Roasted , roasted sweet potatoes, apples, goat cheese",
      smallPrice: 7.0,
      largePrice: 10.0,
    },
    {
      image: Blog_6,
      name: "Summer Asian Slaw",
      description:
        "Pickled carrots, celery, tomatoes, cilantro, blue cheese, za’atar",
      smallPrice: 10.0,
      largePrice: 14.0,
    },
    {
      image: Blog_7,
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
      imageUrl: miso_salmon
    },
    {
      name: "Crunchy Taco",
      description: "Salmon, avocado, shredded cabbage, cilantro, tortilla chips, warm quinoa, arugula",
      smallPrice: "$24.0",
      largePrice: "$34.0",
      imageUrl: crunchy_taco
    },
    {
      name: "Italian Pasta Soup",
      description: "Red onions, basil, za’atar breadcrumbs, chopped romaine, shredded kale, pesto vinaigrette",
      smallPrice: "$21.0",
      largePrice: "$31.0",
      imageUrl: italian_pasta
    },
    {
      name: "Garlic Chili Bowl",
      description: "Shredded cabbage, raw carrots, red onions, basil, sunflower seeds, warm wild rice, baby spinach",
      smallPrice: "$19.0",
      largePrice: "$29.0",
      imageUrl: garlic_chili
    },
  ];


  return (
    <>
      <div className="w-full sm:container p-5 sm:m-auto sm:px-14">

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
                <button className=' hover:bg-[#E6FF55] hover:text-green-950 hover:border-none px-8 py-3 mt-5 border border-red-800 rounded-full'>Learn More</button>
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {salads.map((salad, index) => (
              <SaladCard key={index} {...salad} />
            ))}
          </div>
        </div>

        {/* Main Dishes  */}

        <div className="bg-gray-50 py-8 px-4">
          <NavLink to={'/Cart'}>
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
          </NavLink>
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

        {/* footer  */}
        <Sign_Footer />

      </div >



    </>
  )
}

export default Ourmenus
