import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities}) => {
  console.log("city",cities)
  return (
    <div className='button-box'>
        {cities.map((item)=>(
           <Button variant="warning" className='button' size="sm">{item}</Button>
        ))}
    </div>
  )
}

export default WeatherButton
