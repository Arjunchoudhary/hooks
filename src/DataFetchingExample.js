import React, { useState, useEffect } from 'react';

function DataFetchingExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []); // The empty dependency array means this effect runs once when the component mounts.

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fetching Data from API:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingExample;
