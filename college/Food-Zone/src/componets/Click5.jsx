import React from 'react'
import { NavLink } from 'react-router-dom'
import asset_2 from '../assets/asset_2.jpeg'
import asset_4 from '../assets/asset_4.jpeg'
import italian_pasta from '../assets/italian_pasta.jpg'
import Logo from './Logo.jsx'

// icons
import { FaTripadvisor } from "react-icons/fa";

const Click1 = () => {
  return (
    // w-full sm:container sm:m-auto sm:px-14
    <div className=" ">

      <div className="bg-cover sm:bg-cover  text-wrap   h-screen  bg-[url(./assets/Blog_5.jpg)]   flex items-end bg-gray-600  mb-5 md:-mt-[180px] ">
        <div className="w-full text-center flex-col space-y-5 mb-5 ">
          <div className="spinner ml-10 mt-20 sm:block hidden ">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h1 className='text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white '>Flavour so good you’ll try to eat <br /> with your eyes</h1>
          <p className='text-xl text-white'>September 29, 2022 In Clean Food</p>
        </div>
      </div>

      <div className="w-full sm:container sm:m-auto sm:px-14">


        {/* text1 */}

        <div className=" p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="">
            {/* Left section */}
            <div className="flex flex-col justify-between sm:pl-28 p-10 rounded-lg ">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                In a professional context, it often happens that private or corporate clients order a
                publication to be made and presented with the actual content still not being ready.
                Think of a news blog that’s filled with content hourly on the day of going live.
                However, reviewers tend to be distracted by comprehensible content, say, a random text
                copied from a newspaper or the internet.
              </p>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4">
                There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or randomised words which don’t
                look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                need to be sure there isn’t anything embarrassing hidden in the middle of text.
              </p>
            </div>

            {/* Right section */}
            <div className="sm:flex gap-10  p-6  rounded-lg ">
              <blockquote className="text-center bg-[#e1f1e1] p-8 rounded-lg">
                <p className="text-xl md:text-2xl font-semibold">
                  If something stands between you and your success, move it. Never be denied.
                </p>
                <p className="text-gray-500 mt-4">John Appleseed</p>
              </blockquote>
              <p className="text-gray-700   text-lg md:text-xl leading-relaxed mt-4">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
              </p>
            </div>
          </div>
        </div>

        {/* text2 */}

        <div className=" p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="max-w-6xl mx-auto">
            {/* Text Section */}
            <div className="text-gray-700 text-lg md:text-xl mb-8">
              <p>
                Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Taking an image, freezing a moment, reveals how rich reality truly is.</li>
                <li>We are making photographs to understand what our lives mean to us.</li>
                <li>A portrait is not made in the camera but on either side of it.</li>
              </ul>
              <p className="mt-4">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.
              </p>
            </div>

            {/* Image Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* First Image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={asset_4}
                  alt="Food 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Second Image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={asset_2}
                  alt="Food 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Third Image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={italian_pasta}
                  alt="Food 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* well done */}

        <div className=" p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="max-w-6xl mx-auto ">
            {/* Large Quote */}
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Well done is better than <br /> well said.
            </h1>

            {/* Paragraph Text */}
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              In a professional context it often happens that private or corporate clients order a publication to be made and presented with the actual content still not being ready. Think of a news blog that’s filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet.
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of the text.
            </p>
          </div>
        </div>


        {/* what hurt */}

        <div className=" p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="max-w-6xl mx-auto ">
            {/* Paragraph Text */}
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">

              The saying "What hurts today makes you stronger tomorrow" carries a profound truth that resonates with human experiences across cultures and time. Pain, in any form—be it physical, emotional, or psychological—is something we often try to avoid. However, life inevitably brings hardship, challenges, and discomfort. The growth we experience from these struggles is what strengthens our character, resilience, and determination. Although it's natural to seek comfort and avoid suffering, it's in moments of adversity that we discover our true capabilities. Pain and hardship push us beyond our limits, encouraging us to dig deep within ourselves to find the strength to keep moving forward.
            </p>

            {/* Large Quote */}
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Well done is better than <br /> well said.
            </h1>

            {/* Paragraph Text */}
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              The soreness and fatigue they experience after intense workouts are not signs of weakness but rather indicators that their muscles are growing and becoming stronger. Similarly, when we face emotional challenges—whether it's the loss of a loved one, failure in a project, or personal disappointment—it may feel unbearable in the moment. But over time, as we navigate through the pain, we begin to understand its purpose. These experiences teach us how to cope, adapt, and rise above our circumstances. Each difficult situation builds our emotional "muscle memory," making us better equipped to handle similar challenges in the future.
            </p>
          </div>
        </div>

        {/* animation */}
        <div className="flex justify-between">
          <div class="card">
          </div>
          <div class="card">
          </div>
          <div class="card">
          </div>
          <div class="card">
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

    </div>
  )
}

export default Click1
