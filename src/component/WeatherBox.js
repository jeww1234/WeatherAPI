import React from 'react'
import { Container } from 'react-bootstrap'

const WeatherBox = ({weather}) => {
  console.log("1",weather)
  let stemp = Math.floor(weather?.main.temp)
  let hhtemp = Math.floor((stemp * 1.8)+32)
  return (
    <Container className='weather-box'>
      <div className='text'>{weather?.name}</div>
      <div className='text'>{stemp}&#176;C / {hhtemp}&#176;F</div>
      <p className='text2'>{weather?.weather[0].description}</p>
    </Container>
  )
}

export default WeatherBox
