import { useState } from 'react';
import styled from 'styled-components'
import CityComponent from './modules/CityComponent';
import WeatherComponent from './modules/WeatherinfoComponent';
import Axios from "axios";


// const API_KEY = 'f2f2db00d9b78c3c5474b16236f733d9'
const Container = styled.div`
display:flex;
flex-direction:column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius: 4px;
width: 380px;
background: white;
font-family: Montserrat;
`;

const AppLabel = styled.span`
color:black;
font-size: 18px;
font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f2f2db00d9b78c3c5474b16236f733d9`,
      );
      updateWeather(response.data);
  };
  
  return (
  <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
