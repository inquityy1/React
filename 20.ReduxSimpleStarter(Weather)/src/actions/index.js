import axios from "axios";

const API_KEY = "4aa1c017a192034ab732f39d053b301e";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log("Request", request);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
