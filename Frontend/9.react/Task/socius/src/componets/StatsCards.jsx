import React from "react";
import { useState } from "react";

const stats = [
  { label: "Earnings", value: "$350.4" },
  { label: "Spend Balance", value: "$642.39" },
  { label: "Growth", value: "$574.34" },
  { label: "New Debtors", value: "$1,000" },
  { label: "Total Projects", value: "2935" },
];

// const tasks = [
//   { name: "Landing Page Design", completed: false },
//   { name: "Dashboard Builder", completed: true },
//   { name: "Mobile App Design", completed: true },
//   { name: "Illustrations", completed: false },
//   { name: "Promotional LP", completed: true },
// ];

const StatsCards = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg text-center">
            <h2 className="text-xl font-bold">{stat.value}</h2>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
      {/* <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Spent</h2>
          <p className="text-2xl font-bold">$37.5K</p>
          <p className="text-green-500">+2.45%</p>
          <div className="h-24 bg-gray-200 rounded-lg"></div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Weekly Revenue</h2>
          <div className="h-24 bg-gray-200 rounded-lg"></div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Tasks</h2>
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center gap-2">
              <input type="checkbox" checked={task.completed} className="w-4 h-4" readOnly />
              <span className={task.completed ? "line-through" : ""}>{task.name}</span>
            </div>
          ))}
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Daily Traffic</h2>
          <p className="text-2xl font-bold">2,579 Visitors</p>
          <div className="h-24 bg-gray-200 rounded-lg"></div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Your Pie Chart</h2>
          <div className="h-24 w-24 mx-auto bg-gray-200 rounded-full"></div>
          <div className="flex justify-between mt-2">
            <span>Your Files - 65%</span>
            <span>System - 35%</span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default StatsCards;