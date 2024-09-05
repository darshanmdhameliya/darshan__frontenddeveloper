import React from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";


export function Home() {
  const list = [
    {
      title: "Pizza",
      img: "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_640.jpg",
      price: "$5.50",
    },
    {
      title: "Burger",
      img: "https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg",
      price: "$3.00",
    },
    {
      title: "French Fries",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEm2LJ6Qx5Ja-sR5EFhDB7EQBHAhkpvaTIQ&s",
      price: "$10.00",
    },
    {
      title: "Samosa",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIcbbwfphKUEcu53KmnBj8rWE1sgG1r_oLg&s",
      price: "$5.30",
    },
    {
      title: "Sandwich",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWG3zMlm9xz_-4G79HGIo7okA4gnMRqrIDrg&s",
      price: "$15.70",
    },
    {
      title: "Tacos",
      img: "https://img.freepik.com/free-photo/fresh-beef-taco-wooden-table-with-sauce-generative-ai_188544-8042.jpg",
      price: "$8.00",
    },
    {
      title: "Salad",
      img: "https://img.freepik.com/free-photo/dietary-salad-with-tomatoes-feta-lettuce-spinach-pine-nuts_2829-20128.jpg",
      price: "$7.50",
    },
    {
      title: "Hot Dog",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdard4Vfd4Lm02gFOCcTbKGwisCVE0rrZWw&s",
      price: "$12.20",
    },
  ];

  return (
    <>

      {/* story */}
      <div className="w-full container m-auto ">
        <div className=" h-screen mt-3 bg-[url(./assets/asset_0.jpeg)]   flex items-end bg-gray-600 rounded-2xl mb-5 ">
          <div className="flex-col space-y-4 ms-10 mb-5 ">
            <h1 className='text-white'>Highlights</h1>
            <h1 className='font-bold text-4xl text-white '>Where every <br /> <span>ingredient tells</span><br /> <span>a story</span></h1>
            <button className='bg-[#E6FF55] text-[#00473C] rounded-full py-3 px-9'>View Our Menus</button>
          </div>
        </div>


        {/* view all menus */}
        <div className="flex justify-between mb-5">
          <div className="">
            <h1>New Menu</h1>
            <h1 className='font-semibold  text-4xl'>View Our <br /> <span>Menus</span> </h1>
          </div>
          <div className=" ">
            <button className='border rounded-full py-10  p-6 bg-[#E6FF55] text-[#00473C]'>View All</button>
          </div>
        </div>

        {/* card */}
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>


          {/* Learn More */}
        <div className=" h-screen mt-10 bg-[url(./assets/asset_4.jpeg)] bg-gray-600 rounded-2xl mb-5 ">
          <div className="flex-col space-y-4 ms-10 mb-5  ">
            <h1 className='text-white'>Our Restaurant</h1>
            <h1 className='font-bold text-5xl text-white '> A culinary  <br /> <span>adventure for all</span><br /> <span>the senses</span></h1>
            <button className='bg-[#E6FF55] text-[#00473C] rounded-full py-3 px-9'>Learn More</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home