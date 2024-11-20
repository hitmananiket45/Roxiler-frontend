// src/services/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Backend API base URL

// Function to get bar chart data
export const getBarChartData = (month) => {
  return axios.get(`${API_URL}/bar-chart?month=${month}`);
};

// Function to get pie chart data
export const getPieChartData = (month) => {
  return axios.get(`${API_URL}/pie-chart?month=${month}`);
};

// Function to get statistics
export const getStatistics = (month) => {
  return axios.get(`${API_URL}/statistics?month=${month}`);
};

// Function to get transaction data
export const getTransactions = (page, perPage, search) => {
  return axios.get(`${API_URL}/transactions?page=${page}&perPage=${perPage}&search=${search}`);
};
