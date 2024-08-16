import React from 'react'
import { Container } from 'react-bootstrap'

const WeatherBox = ({weather}) => {
  console.log("1",weather)
  let stemp = Math.floor(weather?.main.temp)
  let hhtemp = Math.floor((stemp * 1.8)+32)
  return (
    <Container className='weather-box'>
      <h1>{weather?.name}</h1>
      <h2>{stemp}&#176;C / {hhtemp}&#176;F</h2>
      <h2>{weather?.weather[0].description}</h2>
    </Container>
  )
}

export default WeatherBox
