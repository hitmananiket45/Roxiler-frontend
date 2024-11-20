// src/components/Statistics.js

import React, { useState, useEffect } from 'react';
import { getStatistics } from '../services/api';

const Statistics = ({ month }) => {
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    // Fetch statistics for the given month
    getStatistics(month)
      .then((response) => {
        setStatistics(response.data);
      })
      .catch((error) => console.error('Error fetching statistics:', error));
  }, [month]);

  return (
    <div>
      {statistics ? (
        <div>
          <h3>Total Amount: {statistics.totalAmount}</h3>
          <h3>Total Sold Items: {statistics.totalSoldItems}</h3>
          <h3>Total Unsold Items: {statistics.totalNotSoldItems}</h3>
        </div>
      ) : (
        <p>Loading statistics...</p>
      )}
    </div>
  );
};

export default Statistics;
