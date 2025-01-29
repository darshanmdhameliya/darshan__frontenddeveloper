import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className=" flex space-x-4 bg-orange-100 p-4 justify-center shadow-md">
                <NavLink to="/" className="text-lg font-medium hover:text-orange-500">AddExpense</NavLink>
                <NavLink to="/ExpenseList" className="text-lg font-medium hover:text-orange-500">ExpenseList</NavLink>
                <NavLink to="/EditExpense" className="text-lg font-medium hover:text-orange-500">EditExpense</NavLink>
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;
