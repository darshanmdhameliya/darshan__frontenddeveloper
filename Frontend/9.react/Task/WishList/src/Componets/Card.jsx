import React from 'react';
import { CardData } from './data';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { useContext } from 'react';

const Card = () => {

    const { likedItems, setLikedItems } = useContext(ProductContext)

    console.log('likedItems', likedItems);

    const navigate = useNavigate();

    const handleLike = (item) => {

        setLikedItems((prevLikedItems) => {
            if (prevLikedItems.some(likedItem => likedItem.title === item.title)) {
                return prevLikedItems;
            }
            return [...prevLikedItems, item];
        });

    };

    return (
        <>
            <div className="container mx-auto flex flex-wrap justify-around gap-y-8 mt-5">
                {CardData.map((item, index) => {
                    const isLiked = likedItems.some((likedItem) => likedItem.title === item.title);
                    return (
                        <div
                            key={index}
                            className="relative max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
                        >
                            <img
                                className="rounded-t-lg w-full object-cover object-top"
                                src={item.image}
                                alt={item.title}
                            />
                            <div
                                className={`absolute top-4 right-4 cursor-pointer ${isLiked ? 'text-red-500' : 'text-gray-400'}`}
                                onClick={() => handleLike(item)}
                            >
                                <svg
                                    className="w-8 h-8 fill-current hover:text-red-500"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41 1 4.5 2.09C11.09 6 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </div>
                            <div className="p-4">
                                <h2 className="text-gray-900 font-bold text-xl mb-2">{item.title}</h2>
                                <p className="text-gray-700 text-base">{item.description}</p>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-gray-900 font-bold text-lg">{item.rating.rate}</span>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 3.243a1 1 0 0 1 1.902 0l1.429 4.444h4.691a1 1 0 0 1 .584 1.81l-3.801 2.778 1.43 4.444a1 1 0 0 1-1.538 1.1l-3.798-2.776-3.798 2.776a1 1 0 0 1-1.539-1.1l1.43-4.444-3.8-2.778a1 1 0 0 1 .584-1.81h4.69l1.43-4.444z"></path>
                                        </svg>
                                        <span className="ml-2 text-gray-600 text-sm">{item.rating.count}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Card;
