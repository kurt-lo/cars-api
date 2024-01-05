import React, { useEffect, useState } from 'react';
import { getCarsData } from '../utils/index';

const App = () => {
  const [carsData, setCarsData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const searchCar = {
        model: searchTerm,
      };
      const data = await getCarsData(searchCar);
      setCarsData(data);
    } catch (error) {
      console.error(`Error fetching cars ${error}`)
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>App</h1>
      <div>
        <input type="text" placeholder='Search Car' onChange={handleSearchChange} />
      </div>
      {carsData ? (
        carsData.map((car, index) => (
          <div key={car.id || index}>
            <p>{car.class}</p>
            <p>{car.drive}</p>
            <p>{car.make}</p>
            <p>{car.model}</p>
            <p>{car.year}</p>
            <p>{car.transmission}</p>
          </div>
        ))
      ) : (
        <p>Search a car...</p>
      )}
    </div>
  );
};

export default App;
