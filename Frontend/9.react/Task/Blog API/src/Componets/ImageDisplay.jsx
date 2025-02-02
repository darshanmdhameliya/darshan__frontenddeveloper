import React, { useState } from 'react';

const images = [
    { id: 1, src: '/electronic.jpg', alt: 'Electronic' },
    { id: 2, src: '/men_shirt.jpg', alt: 'Men Shirt' },
    { id: 3, src: '/sports.jpg', alt: 'Sports' },
];

const ImageDisplay = () => {
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const previousImage = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="flex justify-between w-full max-w-md m-4">
                <button onClick={previousImage} className="btn">Previous</button>
                <button onClick={nextImage} className="btn">Next</button>
            </div>
            <img 
                src={images[index].src} 
                alt={images[index].alt} 
                className="max-w-full h-auto rounded-lg shadow-lg" 
            />
        </div>
    );
};

export default ImageDisplay;
