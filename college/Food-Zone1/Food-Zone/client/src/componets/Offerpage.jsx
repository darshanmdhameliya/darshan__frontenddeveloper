import React from 'react';

// images
import pizza_offer from '../assets/Offer/pizza_offer.jpg'


const Offers = () => {
    const offers = [
        {
            title: 'Buy 1 Get 1 Free Pizza',
            description: 'Order any large pizza and get another one absolutely free!',
            image: pizza_offer,
            code: 'BOGO2024',
        },
        {
            title: '20% Off on Burgers',
            description: 'Get 20% off on all veggie burgers with the code below!',
            image: 'https://example.com/burger-offer.jpg',
            code: 'BURGER20',
        },
        {
            title: 'Free Dessert with Every Combo',
            description: 'Enjoy a free dessert with every combo meal you order!',
            image: 'https://example.com/dessert-offer.jpg',
            code: 'DESSERTFREE',
        },
        {
            title: 'Flat 30% Off on All Orders',
            description: 'Hurry up! Use the promo code and get 30% off on any order.',
            image: 'https://example.com/flat30-offer.jpg',
            code: 'FLAT30',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Exclusive Offers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offers.map((offer, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <img
                                src={offer.image}
                                alt={offer.title}
                                className="w-full object-cover  " />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {offer.title}
                                </h3>
                                <p className="text-gray-600 mt-2">{offer.description}</p>
                                <div className="mt-4">
                                    <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                                        Code: {offer.code}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offers;


// import React from 'react';

// // images
// import pizza_offer from '../assets/Offer/pizza_offer.jpg';
// import sandwich_offer from '../assets/Offer/sandwich_offer.jpg'; // Sandwich offer image
// import burger_offer from '../assets/Offer/burger_offer.jpg'; // New burger offer image
// import dessert_offer from '../assets/Offer/dessert_offer.jpg'; // New dessert offer image
// import flat30_offer from '../assets/Offer/flat30_offer.jpg'; // New flat 30% off offer image

// const Offers = () => {
//     const offers = [
//         {
//             title: 'Buy 1 Get 1 Free Pizza',
//             description: 'Order any large pizza and get another one absolutely free!',
//             image: pizza_offer,
//             code: 'BOGO2024',
//         },
//         {
//             title: '20% Off on Burgers',
//             description: 'Get 20% off on all veggie burgers with the code below!',
//             image: burger_offer, // Local path for burger offer image
//             code: 'BURGER20',
//         },
//         {
//             title: 'Free Dessert with Every Combo',
//             description: 'Enjoy a free dessert with every combo meal you order!',
//             image: dessert_offer, // Local path for dessert offer image
//             code: 'DESSERTFREE',
//         },
//         {
//             title: 'Flat 30% Off on All Orders',
//             description: 'Hurry up! Use the promo code and get 30% off on any order.',
//             image: flat30_offer, // Local path for flat 30% off offer image
//             code: 'FLAT30',
//         },
//         {
//             title: '50% Off on Sandwiches',
//             description: 'Get a 50% discount on all sandwiches using the code below!',
//             image: sandwich_offer,
//             code: 'SANDWICH50',
//         },
//     ];

//     return (
//         <div className="min-h-screen bg-gray-100 py-12">
//             <div className="container mx-auto px-6">
//                 <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
//                     Exclusive Offers
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {offers.map((offer, index) => (
//                         <div
//                             key={index}
//                             className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
//                         >
//                             <img
//                                 src={offer.image}
//                                 alt={offer.title}
//                                 className="w-full object-cover"
//                             />
//                             <div className="p-6">
//                                 <h3 className="text-2xl font-semibold text-gray-800">
//                                     {offer.title}
//                                 </h3>
//                                 <p className="text-gray-600 mt-2">{offer.description}</p>
//                                 <div className="mt-4">
//                                     <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
//                                         Code: {offer.code}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Offers;
