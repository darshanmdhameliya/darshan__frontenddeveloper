import React from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { NavLink } from 'react-router-dom'
import magic_1 from '../assets/magic_1.jpg'
import Blog_1 from '../assets/Blog_1.jpg'
import Blog_2 from '../assets/Blog_2.jpg'
import Blog_3 from '../assets/Blog_3.jpg'
import Blog_4 from '../assets/Blog_4.jpg'
import Blog_5 from '../assets/Blog_5.jpg'
import Blog_6 from '../assets/Blog_6.jpg'
import experiancefood from '../assets/experiancefood.jpg'
import Burger from '../assets/Menusimage/Burger.jpg'
import Frech_Fires from '../assets/Menusimage/French_Fires.jpg'
import Hotdog from '../assets/Menusimage/Hotdog.jpg'
import Pizza from '../assets/Menusimage/Pizza.jpg'
import Salad from '../assets/Menusimage/Salad.jpg'
import Samosa from '../assets/Menusimage/Samosa.jpg'
import Sandwich from '../assets/Menusimage/Sandwich.jpg'
import Tacos from '../assets/Menusimage/Tacos.jpg'
import Logo from './Logo.jsx'
import Slider1 from './Slider.jsx';

// import Click1 from './Click1.jsx'
// import Click2 from './Click2.jsx'
// import Click3 from './Click3.jsx'
// import Click4 from './Click4.jsx'
// import Click5 from './Click5.jsx'
// import Click6 from './Click6.jsx'

// slider 
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// button 
import Button from './Button.jsx';

// icons
import { FaTripadvisor } from "react-icons/fa";

// footer 
import Sign_Footer from './Sign_Footer'



export function Home() {
  const list = [
    {
      title: "Pizza",
      img: Pizza,
      price: "$5.50",
    },
    {
      title: "Burger",
      img: Burger,
      price: "$3.00",
    },
    {
      title: "French Fries",
      img: Frech_Fires,
      price: "$10.00",
    },
    {
      title: "Samosa",
      img: Samosa,
      price: "$5.30",
    },
    {
      title: "Sandwich",
      img: Sandwich,
      price: "$15.70",
    },
    {
      title: "Tacos",
      img: Tacos,
      price: "$8.00",
    },
    {
      title: "Salad",
      img: Salad,
      price: "$7.50",
    },
    {
      title: "Hot Dog",
      img: Hotdog,
      price: "$12.20",
    },
  ];

  const latest_news = [
    {
      path: "Click1",
      image: Blog_1,
      h1: 29,
      p: "SEP",
      Des1: "How a Restaurant Pre-Shift",
      Des2: "Meeting Improves Expereience"
    },
    {
      path: "Click2",
      image: Blog_2,
      h1: 29,
      p: "SEP",
      Des1: "9 Things to Offer to Attract All ",
      Des2: "Restaurant Positions"
    },
    {
      path: "Click3",
      image: Blog_3,
      h1: 29,
      p: "SEP",
      Des1: "When Restaurant Menu Design",
      Des2: "Can Help Lower Food Cost"
    },
    {
      path: "Click4",
      image: Blog_4,
      h1: 29,
      p: "SEP",
      Des1: "A farm-to-table restaurant that",
      Des2: "uses all-natural ingredients"
    },
    {
      path: "Click5",
      image: Blog_5,
      h1: 29,
      p: "SEP",
      Des1: "Flavour so good you’ll try to eat",
      Des2: "with your eyes"
    },
    {
      path: "Click6",
      image: Blog_6,
      h1: 29,
      p: "SEP",
      Des1: "Flavour so good you’ll try to eat",
      Des2: "with your eyes"
    },


  ]

  const settings1 = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const settings2 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>

      <div className="w-full sm:container p-5 sm:m-auto sm:px-14 ">

        <Slider1 />

        {/* view all menus */}   {/* card */}
        <div className="flex justify-between mb-5 ">
          <div className="">
            <h1>New Menu</h1>
            <h1 className='font-semibold text-2xl sm:text-4xl'>View Our <br /> <span>Menus</span> </h1>
          </div>
          <div className=" ">
            <NavLink to={'/OurMenus'}>
              <button className='hover:bg-yellow-10000 hover:border-[1.5px]   hover:border-black  border rounded-full py-8  px-4 sm:py-10  sm:px-6 bg-[#E6FF55] text-[#00473C]'>View All</button>
            </NavLink>
          </div>
        </div>

        <div className="slider-container">
          <Slider {...settings1}>
            {list.map((item, index) => {
              return (
                <Cartslider1 key={index} details1={item} />
              )
            })}
          </Slider>
        </div>

        {/* Learn More */}
        <div className=" h-screen object-cover mt-10 bg-[url(./assets/asset_4.jpeg)] bg-gray-600 rounded-2xl mb-5 ">
          <div className="flex-col space-y-4 ms-10 mb-5  ">
            <h1 className='text-white'>Our Restaurant</h1>
            <h1 className='font-bold text-5xl text-white '> A culinary  <br /> <span>adventure for all</span><br /> <span>the senses</span></h1>
            <NavLink to={'/AboutUs'}>
              <button className='bg-[#E6FF55] mt-5 text-[#00473C] rounded-full py-3 px-9'>Learn More</button>
            </NavLink>
          </div>
        </div>


        {/* Latest News */}
        <div className="">
          <h1 className='font-semibold'>Latest News</h1>
          <h1 className='font-bold  text-5xl'>Check Our <br /> <span>Blog</span> </h1>
        </div>

        <div className="slider-container">
          <Slider {...settings2}>
            {latest_news.map((item, index) => {
              return (
                <Latest_news key={index} details2={item} />
              )
            })}
          </Slider>
        </div>

        {/* The magic of the Kitchen */}

        <div className="md:flex flex-wrap  items-center bg-[#f7f7e8] p-8 rounded-lg gap-8">
          {/* Text Section */}
          <div className="flex-1 ">
            <h3 className="text-lg text-gray-500 mb-2">Highlight</h3>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">The magic of the kitchen</h1>
            <p className="text-lg text-gray-600">
              On cold winter nights, I like to brighten up our dinner table with a big, colorful mix of
              root veggies and hearty greens. On beautiful, warm days.
            </p>
          </div>

          {/* Images Section */}
          <div className="flex-1 grid sm:grid-cols-1 md:grid-cols-2 gap-4 ">
            {/* Main Image */}
            <div className="col-span-1">
              <img
                className="w-full rounded-lg object-cover"
                src={magic_1}
                alt="Main Salad"
              />
            </div>
            {/* Side Images */}
            <div className="flex flex-col justify-between gap-5">
              <div>
                <img
                  className="w-full rounded-lg object-cover"
                  src={Blog_4}
                  alt="Salad 1"
                />
              </div>
              <div>
                <img
                  className="w-full rounded-lg object-cover"
                  src={Blog_5}
                  alt="Salad 2"
                />
              </div>
            </div>
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


        {/* footer  */}
        <Sign_Footer />

      </div >

    </>
  )
}

export default Home


function Cartslider1({ details1 }) {
  return (
    <div className="w-1/2" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: '0.45s' }}>
      <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="full"
            alt={details1.title}
            className="w-full object-cover h-[140px]"
            src={details1.img}
          />
        </CardBody>
        <CardFooter className="text-small flex md:gap-2 md:flex-col lg:flex-row justify-between">
          <b>{details1.title}</b>
          <NavLink to={'/Cart'}>
            <Button />
          </NavLink>
          <p className="text-default-500">{details1.price}</p>
        </CardFooter>
      </Card>
    </div >
  )
}

function Latest_news({ details2 }) {
  return (
    <NavLink to={details2.path}>
      <div className="mx-2 my-10">
        <div className={`bg-cover sm:bg-cover relative h-64 w-full border rounded-2xl`} style={{ backgroundImage: `url(${details2.image})` }}>
          <div className="absolute bg-[#E6FF55] px-3 py rounded-xl m-5">
            <h1 className='font-bold'>{details2.h1}</h1>
            <p>{details2.p}</p>
          </div>
        </div>
        <div className="">
          <h1 className='font-bold text-xl'>{details2.Des1} <br />{details2.Des2}</h1>
        </div>
      </div>
    </NavLink>
  );
}

