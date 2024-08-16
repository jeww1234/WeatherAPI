import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div className='button-box'>
        <Button variant="warning" className='button' size="sm">Current Location</Button>{' '}
        <Button variant="warning" className='button' size="sm">Paris</Button>{' '}
        <Button variant="warning" className='button' size="sm">New York</Button>{' '}
        <Button variant="warning" className='button' size="sm">New York</Button>{' '}
    </div>
  )
}

export default WeatherButton
