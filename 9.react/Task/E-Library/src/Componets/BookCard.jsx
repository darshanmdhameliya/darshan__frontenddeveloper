import React, { useContext, useState } from 'react';
import BookContext from '../Context/BookContext';


const BookCard = () => {
  const { book, setBook } = useContext(BookContext);
  const [editBook, setEditBook] = useState(null);
  const [input, setInput] = useState("");
  const [sortOrder, setSortOrder] = useState("AtoZ"); 
  
  const handleUpdateClick = (book) => {
    setEditBook(book);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updatedBooks = book.map((book) =>
      book.id === editBook.id ? editBook : book
    );
    setBook(updatedBooks);
    setEditBook(null);
  };

  const handleDelete = (id) => {
    const updatedBooklist = book.filter((book) => book.id !== id);
    setBook(updatedBooklist);
  };

  const filterData = book
    .filter((item) => item.title.toLowerCase().includes(input.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "AtoZ") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

  return (
    <>
      <div className="flex items-center gap-4 mt-5">
        <input
          type="text"
          placeholder="Search the card"
          className="p-3 border-2 border-black rounded-2xl"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <select
          className="p-3 border-2 border-black rounded-2xl"
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="AtoZ">A to Z</option>
          <option value="ZtoA">Z to A</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-10 bg-bg-dark">
        {filterData.map((details) => (
          <div
            className="w-full max-w-md p-4 bg-neutral-400 border border-gray-200 rounded-lg shadow sm:p-8"
            key={details.id}
          >
            {editBook && editBook.id === details.id ? (
              <form onSubmit={handleUpdateSubmit}>
                <div className="flex-col space-y-4">
                  <div className="flex">
                    <p className="mr-8">Title:</p>
                    <input
                      type="text"
                      className="p-1"
                      value={editBook.title}
                      onChange={(e) =>
                        setEditBook({ ...editBook, title: e.target.value })
                      }
                      placeholder="Title"
                    />
                  </div>
                  <div className="flex">
                    <p className="mr-3">Author:</p>
                    <input
                      type="text"
                      className="p-1"
                      value={editBook.author}
                      onChange={(e) =>
                        setEditBook({ ...editBook, author: e.target.value })
                      }
                      placeholder="Author"
                    />
                  </div>
                  <div className="flex">
                    <p className="mr-4">Status:</p>
                    <input
                      type="text"
                      className="p-1"
                      value={editBook.status}
                      onChange={(e) =>
                        setEditBook({ ...editBook, status: e.target.value })
                      }
                      placeholder="Status"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-red-600 text-white rounded-full hover:bg-red-100 hover:text-red-700 border hover:border-red-700 py-[5px] px-5 mt-5"
                >
                  Save
                </button>
              </form>
            ) : (
              <div>
                <p>Title: {details.title}</p>
                <p>Author: {details.author}</p>
                <p>Status: {details.status}</p>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 mt-5 gap-4">
                  <button
                    className="bg-green-600 text-white rounded-full hover:bg-green-100 hover:text-green-700 border hover:border-green-700 py-1 px-3"
                    onClick={() => handleUpdateClick(details)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-600 text-white rounded-full hover:bg-red-100 hover:text-red-700 border hover:border-red-700 py-1 px-3"
                    onClick={() => handleDelete(details.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default BookCard;
