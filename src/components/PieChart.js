// src/components/PieChart.js

import React, { useState, useEffect } from 'react';
import { getPieChartData } from '../services/api';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const PieChart = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch pie chart data for the given month
    getPieChartData(month)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error('Error fetching pie chart data:', error));
  }, [month]);

  const chartData = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        data: data.map((item) => item.count),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default PieChart;
