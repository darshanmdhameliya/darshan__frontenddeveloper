import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=" flex space-x-4 bg-orange-100 p-4 justify-center shadow-md">
            <NavLink to="/" className="text-lg font-medium hover:text-orange-500">AddExpense</NavLink>
            <NavLink to="/ExpenseList" className="text-lg font-medium hover:text-orange-500">ExpenseList</NavLink>
        </div>
    );  
};

export default Navbar;
