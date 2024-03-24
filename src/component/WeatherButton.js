import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity, selectedCity }) => {
  console.log("cities?", cities);

  return (
    <div>

      <Button
        style={{ backgroundColor: selectedCity === '' ? '#222222' : 'transparent' }}
        onClick={() => setCity('')}
        active={!selectedCity}
      >
        Current Location
      </Button>{' '}

      {cities.map((item, index) => (
        <Button
          style={{ backgroundColor: selectedCity === item ? '#222222' : 'transparent' }}
          key={index}
          onClick={() => setCity(item)}
          active={selectedCity === item}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
