import React from "react";

const RevenueCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold">Total Spend</h3>
        <p className="text-green-500">On Track</p>
        {/* Add chart component here */}
      </div>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold">Weekly Revenue</h3>
        {/* Add bar chart component here */}
      </div>
    </div>
  );
};

export default RevenueCharts;