import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Blog_3 from '../assets/Blog_3.jpg'

// icon 
import { IoMdHeart } from "react-icons/io";

export function Cart() {
  const navigate = useNavigate();
  const [cartItems] = useState(
    Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      name: `Food Item ${i + 1}`,
      description: 'Delicious vegetarian food item with amazing taste and quality.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: [Blog_3]
    }))
  );

  // likedItem 
  const [likedItems, setLikedItems] = useState(
    JSON.parse(localStorage.getItem('likedItems')) || []
  );

  const handleLike = (item) => {
    if (!likedItems.some((likedItem) => likedItem.id === item.id)) {
      const updatedLikes = [...likedItems, item];
      setLikedItems(updatedLikes);
      localStorage.setItem('likedItems', JSON.stringify(updatedLikes));
    }
  };

  // Order Now 
  const [orderItems, setOrderItems] = useState(
    JSON.parse(localStorage.getItem('orderItems')) || []
  );

  const handleOrder = (item) => {
    const currentOrderItems = JSON.parse(localStorage.getItem('orderItems')) || [];
    if (!currentOrderItems.some((orderItem) => orderItem.id === item.id)) {
      const updatedOrders = [...currentOrderItems, item];
      setOrderItems(updatedOrders);
      localStorage.setItem('orderItems', JSON.stringify(updatedOrders));
    }
    navigate('/order');
  };


  const goToLikedItems = () => {
    navigate('/liked-items');
  };

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-2 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="l">
            <img src={item.image} alt="" />
            <IoMdHeart className='absolute size-10 rounded-bl-2xl p-2 bg-slate-100 bg-opacity-70 top-0 right-0 hover:text-pink-600 text-black' onClick={goToLikedItems} />
          </div>
          <div className="p-4">
            <h1 className="text-lg font-semibold text-gray-800">{item.name}</h1>
            <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 transition-transform transform hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
           
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="block text-sm font-semibold">Sizes:</span>
              {item.sizes.map((size, index) => (
                <span
                  key={index}
                  className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium hover:bg-gray-100 transition-transform transform hover:scale-105"
                >
                  {size}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
              onClick={() => handleLike(item)}
            >
              Add to Liked
            </button>
            <button
              type="button"
              className="mt-4 w-full rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
              onClick={() => handleOrder(item)}
            >
              Order Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
