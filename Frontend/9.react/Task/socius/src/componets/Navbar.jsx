import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md flex justify-between items-center">
      <div className="text-lg font-semibold">Admin Dashboard</div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 border rounded-md focus:outline-none"
        />
        <div className="flex space-x-2">
          <span className="text-sm">🇬🇧</span>
          <span className="text-sm">🇺🇸</span>
        </div>
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </div>
    </nav>
  );
};

export default Navbar;      