import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="sticky top-0 z-20 flex space-x-4 bg-orange-100 p-4 justify-center shadow-md">
            <NavLink to="/" className="text-lg font-medium hover:text-orange-500">Card</NavLink>
            <NavLink to="/WishList" className="text-lg font-medium hover:text-orange-500">
                <FaShoppingBag className="text-center text-2xl" />
            </NavLink>
        </div>
    );  
};

export default Navbar;
