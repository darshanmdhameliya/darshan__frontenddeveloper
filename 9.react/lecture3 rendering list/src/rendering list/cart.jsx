import React from 'react'

const Cart = () => {

  const cart = [
    {
      id: 1,
      name: "Electronic item",
      img: './electronic.jpg',
    },
    {
      id: 2,
      name: "men shirt",
      img: './men_shirt.jpg',
    },
    {
      id: 3,
      name: "sports item",
      img: './sports.jpg',
    }
  ]

  const filter =cart.filter((item) => item.id <= 2)

  return (
    <div className="flex justify-center h-screen items-center bg-violet-50 ">
      {
        filter.map((item) => (
          <>
            {/* <div className="pb-0  items-start w-fit border-2 border-black rounded">
              <div className="">
                <h1 className='font-bold'>{item.name}</h1>
                <img className='overflow-visible ' src={item.img} alt="" />
              </div>
            </div> */}
            <div className="pb-0 border-2 border-black rounded  w-fit ">
              <div className="pb-0 pt-2 px-4 flex-col ">
                <p className="text-tiny uppercase font-bold">{item.name}</p>
              </div>
              <div className="overflow-visible py-2">
                <img
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={item.img}
                  width={270}
                />
              </div>
            </div>

          </>
        ))
      }
    </div>
  )
}

export default Cart


