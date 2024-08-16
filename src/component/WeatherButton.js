import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
        <Button variant="warning" className='button'>Current Location</Button>{' '}
        <Button variant="warning" className='button'>Paris</Button>{' '}
        <Button variant="warning" className='button'>New York</Button>{' '}
    </div>
  )
}

export default WeatherButton
