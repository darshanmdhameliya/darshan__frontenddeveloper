import React, { useState } from 'react'
import BookContext from './BookContext';

const BookContextProvider = ({ children }) => {

    const [book, setBook] = useState([])
  let booklist = [...book]

    return (
        <div>
            <BookContext.Provider value={{ book, setBook }}>
                {children}
            </BookContext.Provider>
        </div>
    )
}

export default BookContextProvider