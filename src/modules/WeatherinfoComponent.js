import React from 'react';
import styled from 'styled-components'

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
}; 


const WeatherCondition=styled.div`
display: flex;
flex-direction: row;
align-items:center;
width: 100%;
justify-content: space-between;
margin: 30px auto;
`;

const Condition=styled.span`
margin:20px auto;
font-size: 14px;
& span {
    font-size: 28px;
}
`;
const WeatherLogo = styled.img`
width: 100px;
height: 100px
margin: 5px auto;
`;
const Location = styled.span`
font-size:28px;
font-weight:bold;
`;
const WeatherInfoLabel = styled.span`
font-size:14px;
font-weight:bold;
margin:20px 25px 10px;
text-align:start;
width:90%;
text-transform: capitalize;

`;
const WeatherInfoContainer = styled.div`
display: flex;
width: 90%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`;
const InfoContainer = styled.div`
display: flex;
margin: 5px 10px;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
display: flex;
flex-direction: column;
font-size: 14px;
margin: 15px;
& span {
  font-size: 12px;
  text-transform: capitalize;
}
`;
const WeatherInfoComponent = (props) => {
  const {name, value} = props;
  return (
      <InfoContainer>
          <InfoIcon src={WeatherInfoIcons[name]}/>
          <InfoLabel>
              {value}
              <span>{name}</span>
          </InfoLabel>
      </InfoContainer>
  );
};
const WeatherComponent = (props) => {
  const {weather} = props;
  const isDay = weather?.weather[0].icon?.includes('d')
  const getTime = (timeStamp) => {
      return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  }
    return (
    <>
    <WeatherCondition>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}C`}</span>
          {` | ${weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src={WeatherIcons[weather?.weather[0].icons]} />
    </WeatherCondition>
    <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
    <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
    <WeatherInfoContainer>
        <WeatherComponent 
        name={isDay?"sunset":"sunrise"}
        value={getTime(weather?.sys[isDay?"sunset":"sunrise"])}
        />
        <WeatherComponent name="humidity" value={weather?.main?.humidity} />
        <WeatherComponent name="wind" value={weather?.wind?.speed} />
        <WeatherComponent name="pressure" value={weather?.main?.pressure} />
    </WeatherInfoContainer>
    </>
    );
};
export default WeatherComponent;



