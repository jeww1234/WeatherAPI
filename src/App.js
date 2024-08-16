import './App.css';
import { useEffect, useState } from 'react';
// import { useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//앱 실행되자마자 현재위치기반의 날씨가 보인다.
//날씨정보에는 도시, 섭시, 화씨, 날씨상태
//5개의 버튼(현재위치, 4개는 다른 도시)
//도시버튼을 클릭할때 마다 도시별 날씨가 나온다.
//현재위치 버튼을 누르면 다시 다시현재위치기반의 날씨가 나온다.
//데이터를 들고오는 동안 로딩스피너가 돈다.


function App() {
  const [weather,setWeather] = useState(null)
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
    });
  }


  const getWeatherByCurrentLocation= async(lat, lon)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0b455b67f7ff2cd45dcccd33831a3728&units=metric`
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data)
  }


  useEffect(()=>{
    getCurrentLocation();
  },);

  
  return (
    <div className='box'>
      <div className='weather-container'>
      <WeatherBox weather={weather}/>
      </div>
      <WeatherButton />
    </div>
  );
}

export default App;
