import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, selectedCity, handleCityChange}) => {
  console.log("city",cities)
  return (
    <div className='button-box'>
      {<Button variant={selectedCity == null ? "outline-danger" : "warning"} className='button' size="sm" onClick={() => handleCityChange("current")}>Current Location</Button>}
        {cities.map((city)=>(
           <Button variant={`${selectedCity === city ? "outline-danger" : "warning"}`} onClick={()=>handleCityChange(city)} className='button' size="sm">{city}</Button>
        ))}
    </div>
  )
}

export default WeatherButton
