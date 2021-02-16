import React, { useEffect, useState } from 'react';
import axios from 'axios';
import House from '../components/House';
import '../styles/HouseList.css';

const HouseList = () => {
  const [houses, setHouses] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          'http://localhost:3001/houses',
          { headers: { Authorization: `${sessionStorage.getItem('auth_token')}` } },
          { withCredentials: true },
        );
        setHouses(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(houses);
  return (
    <>
      {houses && houses.length ? (
        <div className="houseList-container">
          {houses.map(house => (<House key={house.id} house={house} />))}
        </div>
      ) : <div>No data</div>}
    </>
  );
};

export default HouseList;