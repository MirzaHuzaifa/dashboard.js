import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold">Welcome to the Dashboard!</h2>
        <p className="text-gray-700">This is your dashboard content.</p>
        <h1 className="text-5xl font-bold underline">
        Hello world!
      </h1>
      <div class="flex flex-col items-center justify-center h-screen">
      <div class="top-bar bg-purple-500 py-4">
        <button class="top-bar-button">Click Me</button>
      </div>
      <div class="chart-container mt-8 rounded-lg shadow-xl">
        
      </div>
    </div>
    
      </div>
    </div>
  );
};

export default Dashboard;
