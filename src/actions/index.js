import axios from 'axios';


const API_KEY = "e18b7bede7d6ffcd4a2445765fcf8bee";
const ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    const url = ROOT_URL + "&q=" + city + ",fi";
    const request = axios.get(url);

    console.log('request', request);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}