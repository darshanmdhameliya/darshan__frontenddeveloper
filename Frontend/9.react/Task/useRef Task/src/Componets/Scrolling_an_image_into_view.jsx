import React, { useRef } from 'react';
import img1 from '../assets/images1.jpeg'
import img2 from '../assets/images2.jpeg'
import img3 from '../assets/images3.jpeg'

const Scrolling_an_image_into_view = () => {
    const sliderRef = useRef(null);
    const images = [
        img1,
        img2,
        img3
    ];
    const scrollToSlide = (index) => {
        if (sliderRef.current) {
            const sliderWidth = sliderRef.current.offsetWidth;
            sliderRef.current.scrollTo({
                left: index * sliderWidth,
                behavior: 'smooth',
            });
        }
    };
    const nextSlide = () => {
        if (sliderRef.current) {
            const sliderWidth = sliderRef.current.offsetWidth;
            const totalSlides = images.length;
            const currentSlide =
                Math.round(sliderRef.current.scrollLeft / sliderWidth);
            scrollToSlide((currentSlide + 1) % totalSlides);
        }
    };
    const prevSlide = () => {
        if (sliderRef.current) {
            const sliderWidth = sliderRef.current.offsetWidth;
            const totalSlides = images.length;
            const currentSlide =
                Math.round(sliderRef.current.scrollLeft / sliderWidth);
            scrollToSlide((currentSlide - 1 + totalSlides) % totalSlides);
        }
    };
    return (
        <div className="relative w-full max-w-lg mx-auto">
          
            <div
                ref={sliderRef}
                className="flex overflow-hidden rounded-lg shadow-md scroll-smooth"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full flex-shrink-0 snap-center h-64 object-cover"
                    />
                ))}
            </div>

            {/* <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
            >
                &#8594;
            </button> */}

            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => scrollToSlide(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${Math.round(sliderRef.current?.scrollLeft / sliderRef.current?.offsetWidth) ===
                            index
                            ? 'bg-gray-800'
                            : 'bg-gray-400 hover:bg-gray-600'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};
export default Scrolling_an_image_into_view;






