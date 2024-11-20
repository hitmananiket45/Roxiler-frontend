// src/components/BarChart.js

import React, { useState, useEffect } from 'react';
import { getBarChartData } from '../services/api';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const BarChart = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch bar chart data for the given month
    getBarChartData(month)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error('Error fetching bar chart data:', error));
  }, [month]);

  const chartData = {
    labels: data.map((item) => item.range),
    datasets: [
      {
        label: 'Transactions by Price Range',
        data: data.map((item) => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default BarChart;
