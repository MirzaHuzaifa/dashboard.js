import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

const Dashboard = () => {
  const [datatwo, setDataTwo] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "https://api.dmsprojects.net/api/v1/country-overview/ACY00011",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data, "data console");

      const data = response.data.res.labels.map((label, i) => [
        label,
        response.data.res.data[0][i],
        response.data.res.data[1][i],
      ]);
      
       data.unshift (['Country Overview', 'Budget', 'Awarded']);
       console.log (data);
    
      setDataTwo(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("hello world");
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex items-center px-4 py-2 text-white bg-gray-900">
        <button className="px-4 py-2 mr-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
          Logout
        </button>
      </div>
      <div className="flex items-center justify-center h-screen">
        <Chart chartType="Bar" data={datatwo} width="80%" height="400px" />
      </div>
    </div>
  );
};

export default Dashboard;