import React, { useState, useEffect } from 'react';
import Tree from './components/Tree';
import generateData from './components/data';


const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data (replace with actual fetch call if using a server)
    const fetchedData = generateData();
    setData(fetchedData);
  }, []);

  return (
    <div>
      <h1>Tree Visualization</h1>
      {data ? <Tree data={data} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
