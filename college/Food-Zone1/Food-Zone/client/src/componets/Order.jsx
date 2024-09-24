import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Order() {
  const [orderItems, setOrderItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orderItems')) || [];
    setOrderItems(storedOrders);
  }, []);

  const handleRemove = (itemId) => {
    const updatedOrders = orderItems.filter((item) => item.id !== itemId);
    setOrderItems(updatedOrders);
    localStorage.setItem('orderItems', JSON.stringify(updatedOrders));
  };

  const handleGoBack = () => {
    navigate('/cart');
  };

  const handleBackToCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (!cartItems.some((cartItem) => cartItem.id === item.id)) {
      const updatedCart = [...cartItems, item];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    }
    navigate('/cart');
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
      {orderItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orderItems.map((item) => (
            <div key={item.id} className="relative border rounded-lg p-4 bg-white shadow-md">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.description}</p>
              <button
                type="button"
                className="absolute top-2 right-2 rounded-full bg-red-500 p-2 text-white hover:bg-red-600 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
                onClick={() => handleRemove(item.id)}
              >
                &times;
              </button>



            </div>
          ))}
        </div>
      ) : (
        <p>No items ordered yet!</p>
      )}

      {/* Back to Cart button */}
      <button
        type="button"
        className=" mt-4 w-fit rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
        onClick={handleGoBack}
      >
        Back to Cart
      </button>
    </div>
  );
}

export default Order;
