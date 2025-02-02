import React from "react";
import Navbar from "../componets/Navbar"
import StatsCards from "../componets/StatsCards"
import RevenueCharts from "../componets/RevenueCharts"
import TaskList from "../componets/TaskList"
import TrendingNFTs from "../componets/TrendingNFTs"
import BusinessSteps from "../componets/BusinessSteps"
import TeamMembers from "../componets/TeamMembers"
// import ComplexTable from "../componets/ComplexTable"

const AdminDashboard = () => {    
  return (  
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <Navbar />
      <div className="p-6 space-y-6">
          <StatsCards />
          <RevenueCharts />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TaskList />    
          <BusinessSteps />
        </div>
        <TrendingNFTs />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TeamMembers />
          {/* <ComplexTable />     */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;