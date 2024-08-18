import "./App.css";
import { useEffect, useState, useCallback } from "react";
// import { useState } from 'react';
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import "bootstrap/dist/css/bootstrap.min.css";
import ClipLoader from "react-spinners/ClipLoader";


//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//앱 실행되자마자 현재위치기반의 날씨가 보인다.
//날씨정보에는 도시, 섭시, 화씨, 날씨상태
//5개의 버튼(현재위치, 4개는 다른 도시)
//도시버튼을 클릭할때 마다 도시별 날씨가 나온다.
//현재위치 버튼을 누르면 다시 다시현재위치기반의 날씨가 나온다.
//데이터를 들고오는 동안 로딩스피너가 돈다.

// function App() {
//   const [weather, setWeather] = useState(null);
//   const [city, setCity] = useState("");
//   const [loading, setLoading] = useState(false);
//   const cities = ["paris", "new york", "tokyo", "seoul"];
  
//   const getCurrentLocation = useCallback(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       let lat = position.coords.latitude;
//       let lon = position.coords.longitude;
//       getWeatherByCurrentLocation(lat, lon);
//     });
//   }, []);

//   const getWeatherByCurrentLocation = async (lat, lon) => {
    
//     let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0b455b67f7ff2cd45dcccd33831a3728&units=metric`;
//     setLoading(true);
//     let response = await fetch(url);
//     let data = await response.json();
//     setWeather(data); 
//     setLoading(false);
//   };

//   useEffect(() => {
//     const getWeatherByCity = async () => {
//       let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b455b67f7ff2cd45dcccd33831a3728&units=metric`;
//       let response = await fetch(url);
//       let data = await response.json();
//       setWeather(data);
//     };
//     if (city === "") {
//       getCurrentLocation();
//     } else {
//       getWeatherByCity();
//     }
//   }, [city, getCurrentLocation]);

//   const handleCityChange = (city) => {
//     if (city === "current") {
//       setCity("wow");
//     } else {
//       setCity(city);
//     }
//   };

//   return (
//     <div className="box">
//       {loading?(
//         <ClipLoader color="#f88c6b" loading={loading} size={150} />
//         ):(
//         <div className="weather-container">
//         <WeatherBox weather={weather} />
//         <WeatherButton
//         cities={cities}
//         selectedCity={city}
//         handleCityChange={handleCityChange}
//       />
//       </div>)}
      
            
//     </div>
//   );
// }

// export default App;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [apiError, setAPIError] = useState("");
  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0b455b67f7ff2cd45dcccd33831a3728&units=metric`;
      const res = await fetch(url);
      const data = await res.json();

      setWeather(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };

  const getCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeatherByCurrentLocation(latitude, longitude);
    });
  },[]);

  useEffect(() => {
    const getWeatherByCity = async () => {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b455b67f7ff2cd45dcccd33831a3728&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
  
        setWeather(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setAPIError(err.message);
        setLoading(false);
      }
    };

    if (city == null) {
      setLoading(false);
      getCurrentLocation();
    } else {
      setLoading(false);
      getWeatherByCity();
    }
  }, [city, getCurrentLocation]);

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  return (
    <>
      <div className="box">
        {loading ? (
          <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <ClipLoader color="#f86c6b" size={150} loading={loading} />
          </div>
        ) : !apiError ? (
          <div class="weather-container">
            <WeatherBox weather={weather} />
            <WeatherButton
              cities={cities}
              handleCityChange={handleCityChange}
              selectedCity={city}
            />
          </div>
        ) : (
          apiError
        )}
      </div>
    </>
  );
};
export default App;
