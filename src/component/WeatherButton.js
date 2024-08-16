import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <Row className='button-box'>
        <Col sm={3} xs={6}><Button variant="warning" className='button' size="sm">Current Location</Button>{' '}</Col>
        <Col sm={3} xs={6}><Button variant="warning" className='button' size="sm">Paris</Button>{' '}</Col>
        <Col sm={3} xs={6}><Button variant="warning" className='button' size="sm">New York</Button>{' '}</Col>
        <Col sm={3} xs={6}><Button variant="warning" className='button' size="sm">Japan</Button>{' '}</Col>
    </Row>
    
  )
}

export default WeatherButton
