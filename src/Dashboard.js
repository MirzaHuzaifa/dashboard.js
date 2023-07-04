import React from 'react';
// import { useState } from 'react';
import { Chart } from "react-google-charts";

// const [loggedOut, setLoggedOut]=useState('')

const data = [
  ['Year', 'Sales', 'Expense', 'Profit'],
  ["2016", 3000, 800, 500],
  ["2017", 2000, 600, 400],
  ["2018", 1000, 500, 200],
  ["2019", 3000, 900, 700],
  ["2020", 1000, 400, 100]
]

const options = {
  chart: {
    title: 'Company Performance',
    subtitle: 'Sales, Expense, and profit 2016 to 2020'
  }
}

const Dashboard = () => {

//   const logOut = {
    
//   }
  
  return (
    <div>
    <div class="bg-gray-900 text-white py-2 px-4 flex items-center">
    <button class="mr-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    Login
    </button>
    
  </div>
    <div className="flex items-center justify-center h-screen ">

    <Chart 
    chartType='Bar'
    data={data}
    options={options}
    width="80%"
    height="400px"
    />
    </div>
    </div>
  );
};

export default Dashboard;
