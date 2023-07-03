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
        {/* Add more dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;
