import React from "react";

const tasks = [
  "Landing Page Design",
  "Dashboard Builder",
  "Mobile App Design",
  "Illustrations",
  "Promotional LP",
];

const TaskList = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-semibold">Tasks</h3>
      <ul className="mt-2 space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>  
  );
};

export default TaskList;