import { useLocation } from 'react-router-dom';

const WishList = () => {
    const { state } = useLocation();
    const likedItems = state?.likedItems || [];

    return (
        <div className="container mx-auto mt-5">
            <div className="flex flex-wrap justify-around gap-y-8 mt-5">
                {likedItems.map((item, index) => (
                    <div key={index} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="rounded-t-lg w-full object-cover object-top" src={item.image} alt={item.title} />
                        <div className="p-4">
                            <h2 className="text-gray-900 font-bold text-xl mb-2">{item.title}</h2>
                            <p className="text-gray-700 text-base">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishList;
