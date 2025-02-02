import React from "react";

const members = [
  { name: "Jason Statham", role: "Admin" },
  { name: "Christian Mad", role: "Product Designer" },          
];

const TeamMembers = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-semibold">Team Members</h3>
      <ul className="mt-2 space-y-2">
        {members.map((member, index) => (
          <li key={index} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>        
            <div>
              <h4 className="font-medium">{member.name}</h4>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>  
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMembers; 