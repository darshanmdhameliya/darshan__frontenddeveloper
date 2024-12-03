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

  return (
    <div>
      {
        cart.map((item) => (
          <>
            {/* <div className="pb-0  items-start w-fit border-2 border-black rounded">
              <div className="">
                <h1 className='font-bold'>{item.name}</h1>
                <img className='overflow-visible ' src={item.img} alt="" />
              </div>
              </div> */}
            <div className=" border-2 border-black rounded w-fit bg-lime-200">
              <div className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{item.name}</p>
                <small className="text-default-500">12 Tracks</small>
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
        )
        )
      }
    </div>
  )
}

export default Cart


