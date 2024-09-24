import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Pizza
import margherita from '../assets/pizza/margherita.jpg'
import four_cheese from '../assets/pizza/four_cheese.jpg'
import panner_tikka from '../assets/pizza/panner_tikka.jpg'
import veggie_supreme from '../assets/pizza/veggie_supreme.jpg'

//Samosa
import bihari from '../assets/Samosa/bihari.jpg'
import panner_samosa from '../assets/Samosa/panner_samosa.jpg'
import Lentil from '../assets/Samosa/Lentil.jpg'
import samosas from '../assets/Samosa/samosas.jpg'

//Burger
import classic_veg from '../assets/Burger/classic_veg.jpg'
import spicy_panner from '../assets/Burger/spicy_panner.jpg'
import black_bean from '../assets/Burger/black_bean.jpg'
import beetroot from '../assets/Burger/beetroot.jpg'

//Wrap
import veggie_wrap from '../assets/Wrap/veggie_wrap.jpg'
import avocado from '../assets/Wrap/avocado.jpg'
import grilled_veggie from '../assets/Wrap/grilled_veggie.jpg'
import falafel from '../assets/Wrap/falafel.jpg'

//Salad
import pasta from '../assets/Salad/pasta.jpg'
import greek from '../assets/Salad/greek.jpg'
import caesar from '../assets/Salad/caesar.jpg'
import quinoa from '../assets/Salad/quinoa.jpg'



// icon 
import { IoMdHeart } from "react-icons/io";

export function Cart() {
  const navigate = useNavigate();

  const Pizza = [
    {
      id: 1,
      name: 'margherita Pizza',
      description: 'A classic slice of margherita pizza topped with fresh mozzarella cheese, tomato sauce.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: margherita
    },
    {
      id: 2,
      name: 'four_cheese Pizza',
      description: ' A delicious blend of mozzarella, cheddar, parmesan, and gorgonzola cheeses atop a crispy crust, baked to golden perfection.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: four_cheese
    },
    {
      id: 3,
      name: 'panner_tikka Pizza',
      description: 'Grilled cubes of paneer marinated in a spicy yogurt-based mixture, served with fresh vegetables and a mint chutney dip.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: panner_tikka
    },
    {
      id: 4,
      name: 'veggie_supreme Pizza',
      description: 'A hearty pizza loaded with bell peppers, onions, mushrooms, olives, and fresh spinach, all topped with melted mozzarella cheese.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: veggie_supreme
    },
  ]

  const Samosa = [
    {
      id: 5,
      name: 'bihari Samosa',
      description: 'Crispy pastries filled with a flavorful mix of spiced potatoes, peas perfect for a savory snack.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: bihari
    },
    {
      id: 6,
      name: 'panner Samosa',
      description: ' Flaky samosas stuffed with a savory mixture of paneer, spices, and green chilies.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: panner_samosa
    },
    {
      id: 7,
      name: 'Lentil Samosa',
      description: 'Crunchy pastries filled with a spiced lentil mixture, perfect for a hearty snack.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: Lentil
    },
    {
      id: 8,
      name: 'samosas',
      description: 'Traditional crispy pastry filled with spiced potatoes, peas, and herbs.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: samosas
    },
  ]

  const Burger = [
    {
      id: 9,
      name: 'classic_veg Burger',
      description: 'A traditional veggie burger featuring a seasoned vegetable patty, topped with fresh lettuce, tomato, onion, and creamy mayonnaise, served on a soft bun.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: classic_veg
    },
    {
      id: 10,
      name: 'spicy_panner Burger',
      description: ' Fiery marinated paneer cubes grilled to perfection, infused with bold spices and served with a zesty dip.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: spicy_panner
    },
    {
      id: 11,
      name: 'black_bean Burger',
      description: ' A flavorful black bean patty mixed with spices, topped with fresh avocado, lettuce, and a zesty sauce on a toasted whole grain bun.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: black_bean
    },
    {
      id: 12,
      name: 'beetroot Burger',
      description: 'A vibrant beetroot patty with earthy flavors, topped with fresh greens, avocado, and a zesty yogurt sauce, served in a soft whole wheat bun.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: beetroot
    },
  ]

  const Wrap = [
    {
      id: 13,
      name: 'veggie Wrap',
      description: 'Fresh veggies and hummus wrapped in a tortilla.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: veggie_wrap
    },
    {
      id: 14,
      name: 'avocado Wrap',
      description: ' Creamy avocado, tomato, and lettuce in a whole grain wrap.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: avocado
    },
    {
      id: 15,
      name: 'grilled_veggie Wrap',
      description: 'Grilled zucchini, bell peppers, and cheese in a spinach wrap.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: grilled_veggie
    },
    {
      id: 16,
      name: 'falafel Wrap',
      description: 'Crispy falafel, lettuce, and tahini in a pita wrap.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: falafel
    },
  ]

  const Salad = [
    {
      id: 17,
      name: 'pasta Salad',
      description: 'Pasta, cherry tomatoes, olives, and basil pesto.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: pasta
    },
    {
      id: 18,
      name: 'greek Salad',
      description: 'Crisp greens, feta cheese, olives, and tomatoes.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: greek
    },
    {
      id: 19,
      name: 'caesar Salad',
      description: 'Romaine lettuce, croutons, and vegetarian dressing.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: caesar
    },
    {
      id: 20,
      name: 'quinoa Salad',
      description: 'Quinoa with cucumbers, herbs, and lemon dressing.',
      tags: ['#Veg', '#Delicious', '#Healthy'],
      sizes: ['Small', 'Medium', 'Large'],
      image: quinoa
    },
  ]

  // likedItem 
  const [likedItems, setLikedItems] = useState(
    JSON.parse(localStorage.getItem('likedItems')) || []
  );
  const [showMessage, setShowMessage] = useState(false); // To manage the message box visibility

  const handleLike = (item) => {
    if (!likedItems.some((likedItem) => likedItem.id === item.id)) {
      const updatedLikes = [...likedItems, item];
      setLikedItems(updatedLikes);
      localStorage.setItem('likedItems', JSON.stringify(updatedLikes));

      // Show the message box
      setShowMessage(true);

      // Hide the message box after 3 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  };

  // Order Now 
  const [OrderItem, setOrderItems] = useState(
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
    <>
      {/* Message Box */}
      {showMessage && (
        <div className="fixed top-5 right-5 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-transform transform animate-slide-down">
          <p>Your item has been added to Liked Items!</p>
        </div>
      )}

      <h1 className='text-3xl p-5 font-bold'>Pizza</h1>
      <div className=" overflow-hidden mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-2 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">

        {Pizza.map((item) => (
          <div
            key={item.id}
            className=" overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl h-fit"
          >

            <div className="w-full">
              <img src={item.image} className='w-full h-[300px]' alt="" />
              <IoMdHeart className='absolute size-10 rounded-bl-2xl p-2 bg-slate-100 bg-opacity-70 top-0 right-0 hover:text-pink-600 text-black' onClick={goToLikedItems} />
            </div>
            <div className="p-4">
              <h1 className="text-lg font-semibold text-gray-800">{item.name}</h1>
              <p className="mt-2 text-sm text-gray-600 lin line-clamp-2">{item.description}</p>
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

      <h1 className='text-3xl p-5 font-bold'>Samosa</h1>
      <div className=" overflow-hidden mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-2 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {Samosa.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl  h-fit"
          >
            <div className="w-full h-1/3">
              <img src={item.image} className='w-full h-[300px]' alt="" />
              <IoMdHeart className='absolute size-10 rounded-bl-2xl p-2 bg-slate-100 bg-opacity-70 top-0 right-0 hover:text-pink-600 text-black' onClick={goToLikedItems} />
            </div>
            <div className="p-4">
              <h1 className="text-lg font-semibold text-gray-800">{item.name}</h1>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{item.description}</p>
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

      <h1 className='text-3xl p-5 font-bold'>Burger</h1>
      <div className=" overflow-hidden mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-2 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {Burger.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl  h-fit"
          >
            <div className="w-full h-1/3">
              <img src={item.image} className='w-full h-[300px]' alt="" />
              <IoMdHeart className='absolute size-10 rounded-bl-2xl p-2 bg-slate-100 bg-opacity-70 top-0 right-0 hover:text-pink-600 text-black' onClick={goToLikedItems} />
            </div>
            <div className="p-4">
              <h1 className="text-lg font-semibold text-gray-800">{item.name}</h1>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">{item.description}</p>
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

      <h1 className='text-3xl p-5 font-bold'>Wrap</h1>
      <div className=" overflow-hidden mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-2 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {
          Wrap.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl  h-fit"
            >
              <div className="w-full h-1/3">
                <img src={item.image} className='w-full h-[300px]' alt="" />
                <IoMdHeart className='absolute size-10 rounded-bl-2xl p-2 bg-slate-100 bg-opacity-70 top-0 right-0 hover:text-pink-600 text-black' onClick={goToLikedItems} />
              </div>
              <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-800">{item.name}</h1>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{item.description}</p>
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
      </div >

      <h1 className='text-3xl p-5 font-bold'>Salad</h1>
      <div className=" overflow-hidden mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-2 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {
          Salad.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl  h-fit"
            >
              <div className="w-full h-1/3">
                <div className="">
                  <img src={item.image} className='w-full h-[300px]' alt="" />
                </div>
                <IoMdHeart className='absolute size-10 rounded-bl-2xl p-2 bg-slate-100 bg-opacity-70 top-0 right-0 hover:text-pink-600 text-black' onClick={goToLikedItems} />
              </div>
              <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-800">{item.name}</h1>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{item.description}</p>
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
          ))
        }
      </div >
    </>

  );
}

export default Cart; 