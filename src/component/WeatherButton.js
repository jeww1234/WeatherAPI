import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, getWeatherByCurrentLocation}) => {
  console.log("city",cities)
  return (
    <div className='button-box'>
      {<Button variant="warning" className='button' size="sm" onClick={()=>getWeatherByCurrentLocation()}>Current Location</Button>}
        {cities.map((item, index)=>(
           <Button variant="warning" key={index} onClick={()=>setCity(item)} className='button' size="sm">{item}</Button>
        ))}
    </div>
  )
}

export default WeatherButton
