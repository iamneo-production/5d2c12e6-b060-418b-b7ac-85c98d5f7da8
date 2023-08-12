import { useLocation } from 'react-router-dom';

function StatisticsScreen() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const averageWordCount = queryParams.get('averageWordCount');
  const totalRequests = queryParams.get('totalRequests');

  return (
    <div>
      <h2>Statistics</h2>
      <p>Total Requests: {totalRequests}</p>
      <p>Average Word Count: {averageWordCount}</p>
    </div>
  );
}

export default StatisticsScreen;