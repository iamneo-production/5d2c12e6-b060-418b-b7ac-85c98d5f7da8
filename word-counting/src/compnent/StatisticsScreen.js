import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './StatisticsScreen.css';
 // Import your CSS file
function StatisticsScreen() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const averageWordCount = queryParams.get('averageWordCount');
  const totalRequests = queryParams.get('totalRequests');
  const [statistics, setStatistics] = useState({}); // State to hold retrieved statistics

  useEffect(() => {

    console.log('Fetching data...');

    fetch('http://localhost:8080/words')

      .then(response => {

        if (!response.ok) {

          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response data as JSON
      })
      .then(data => {
        console.log('Data received:', data);
        setStatistics(data);
      })
      .catch(error => {
        console.error('Error fetching word list:', error);
      });
  }, []);
  return (
    <div>
      <h2>Statistics</h2>

      <p>Total Requests: {statistics.totalRequests || totalRequests}</p>

      <p>Average Word Count: {statistics.averageWordCount || averageWordCount}</p>

    </div>

  );

}
export default StatisticsScreen;