import React, { useContext } from 'react';
import BookContext from '../Context/BookContext';

const BookCard = () => {
  const { book, setBook } = useContext(BookContext);

  const handleDelete = (title) => {
  
    const updatedBooklist = booklist.filter((book) => book.title !== title);
    setBook(updatedBooklist); 
  };

  return (
    <div className="grid grid-cols-3 gap-10">
      {book.map((details) => (
        <div
          className="w-full max-w-md p-4 bg-neutral-400 border border-gray-200 rounded-lg shadow sm:p-8"
          key={details.title} 
        >
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
              <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex-col gap-20 items-center">
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Title: {details.title}
                    </p>
                    <p className="text-sm text-gray-900 truncate">
                      Author: {details.author}
                    </p>
                    <p className="text-sm text-gray-900 truncate">
                      Status: {details.status}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 mt-5 gap-4">
                    <button className="bg-green-600 text-white rounded-full hover:bg-green-100 hover:text-green-700 border hover:border-green-700 py-1 px-3">
                      Update
                    </button>
                    <button
                      className="bg-red-600 text-white rounded-full hover:bg-red-100 hover:text-red-700 border hover:border-red-700 py-1 px-3"
                      onClick={() => handleDelete(details.title)} 
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
