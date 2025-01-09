import React, { useContext } from 'react';
import BookContext from '../Context/BookContext';
import Book_image from '../assets/book_image.png'

const BookCard = () => {
  const { book, setBook } = useContext(BookContext);

  const handleDelete = (title) => {
  
    const updatedBooklist = book.filter((book) => book.title !== title);
    setBook(updatedBooklist); 
  };

  return (
    <div className="grid grid-cols-3 gap-10">
      { book.length == 0 ? <div className='text-4xl flex justify-center items-center h-[calc(100svh-65px)]  w-screen text-Black-600'>
        <img src={Book_image} alt="" />
        No Books Available</div> : book.map((details) => (
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

// import React, { useContext, useState } from 'react'
// import BookContext from '../Context/BookContext'
// import BookDetails from './BookDetails'
// const BookCard = () => {

//     const [data, setData] = useState('')
//     const { book } = useContext(BookContext)

//     const ReadMore = () => {
//         <BookDetails />     
//     }

//     const { setBook } = useContext(BookContext)


//     return (

//         <div className='flex  justify-center items-center'>

//             {
//                 book.length == 0 ? <div className='text-4xl flex justify-center items-center h-[calc(100svh-65px)] bg-blue-100 w-screen text-red-600'>No Books Available</div> : book.map((details) => {
//                     return (
//                         <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  " key={details}>

//                             <div className="flow-root text-center">
//                                 <ul role="list" className="divide-y divide-gray-200 text-start">

//                                     <li className="pt-3 pb-0 sm:pt-4">
//                                         <div className="flex items-center ">

//                                             <div className="flex-1 min-w-0 ms-4">
//                                                 <p className="text-sm font-medium text-gray-900 truncate ">
//                                                     Title : {details.title}
//                                                 </p>
//                                                 <p className="text-sm text-gray-500 truncate ">
//                                                     Author :  {details.author}
//                                                 </p>
//                                                 <p className="text-sm text-gray-500 truncate ">
//                                                     Status:{details.status}
//                                                 </p>
//                                             </div>
//                                             <div className="inline-flex items-center text-base font-semibold text-gray-900  gap-4">
//                                                 <button className='bg-green-600 text-white rounded hover:bg-green-100 hover:text-green-700 border hover:border-green-700 py-1 px-3'>Update</button>
//                                                 <button className='bg-red-600 text-white rounded hover:bg-red-100 hover:text-red-700 border hover:border-red-700 py-1 px-3' onClick={() => { setBook(book.filter((item) => item.title === book.title)) }}>Delete</button>
//                                             </div>

//                                         </div>
//                                     </li>
//                                 </ul>

//                                 <div>
//                                     <button className='text-center bg-blue-600 text-white py-1 px-4 mt-5 rounded hover:text-blue-600 border hover:border-blue-600 hover:bg-blue-100' onClick={ReadMore}>Read More</button>
//                                 </div>
//                             </div>

//                         </div>
//                     )
//                 })
//             }


//         </div>
//     )
// }

// export default BookCard
