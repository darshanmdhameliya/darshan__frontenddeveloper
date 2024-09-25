import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LikedItems() {
  const navigate = useNavigate();
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    // Fetch liked items from localStorage when the component mounts
    const storedLikedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
    setLikedItems(storedLikedItems);
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleGoBack = () => {
    navigate('/cart');
  };

  const handleRemove = (itemId) => {
    const updatedLikes = likedItems.filter((item) => item.id !== itemId);
    setLikedItems(updatedLikes);
    localStorage.setItem('likedItems', JSON.stringify(updatedLikes));
  };

  return (
    <>
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 px-2 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {likedItems.length > 0 ? (
          likedItems.map((item) => (
            <div
              key={item.id}
              className="relative rounded-lg border border-gray-200 bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Use item.image instead of item.imageUrl */}
              <img
                src={item.image} // Updated line
                alt={item.name}
                className="aspect-[4/3] w-full rounded-t-lg object-cover md:aspect-[16/9] lg:aspect-auto lg:h-48 transition-transform transform hover:scale-110"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-800">{item.name}</h1>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                <button
                  type="button"
                  className="absolute top-2 right-2 rounded-full bg-red-500 p-2 text-white hover:bg-red-600 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
                  onClick={() => handleRemove(item.id)}
                >
                  &times;
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="px-2 text-lg font-semibold">No liked items found.</p>
        )}
      </div>
      <div className="mx-auto w-full max-w-7xl px-4">
        <button
          type="button"
          className="w-fit rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-orange-600 transition-transform transform hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
          onClick={handleGoBack}
        >
          Back to Cart
        </button>
      </div>
    </>
  );
}

export default LikedItems;
