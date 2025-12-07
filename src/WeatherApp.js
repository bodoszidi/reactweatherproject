import { useState } from "react";
import "./WeatherApp.css";
import FormatedDate from "./FormatedDate";
import axios from "axios";

export default function WeatherApp() {
    const [weather, setWeather] = useState({ ready: false });
   
    function handleResponse(response) {

        console.log(response.data);

        setWeather({
            ready: true,
            temperature: Math.round(response.data.temperature.current),
            wind: response.data.wind.speed,
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            humidity: response.data.temperature.humidity,
            condition: response.data.condition.description,
            img: response.data.condition.icon_url,
            weather: response.data.time,
        });
    }

    if (weather.ready) {
        return (
            <div className="WeatherApp">
                <form>
                    <div className="row m-2">
                        <div className="col-12 col-md-9 py-md-4 ">
                            <input
                                type="search"
                                placeholder="Enter a city"
                                className="form w-100 py-1"
                                autoFocus="on"
                            />
                        </div>
                        <div className="col-12 col-md-3 py-4">
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-primary w-100"
                            ></input>
                        </div>
                    </div>
                </form>
                <div className="row m-2">
                    <div className="col-12">
                        <h1>{weather.city}</h1>
                        <ul>
                            <li>
                                <FormatedDate date={weather.date} />
                            </li>
                            <li>{weather.condition}</li>
                        </ul>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-12 col-md-6">
                        <img src={weather.img} alt={weather.condition} />
                        <span className="temp">{weather.temperature}</span>
                        <span className="unit">°C</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <ul>
                            <li>Humidity: {weather.humidity}%</li>
                            <li>Wind: {weather.wind} km/h</li>
                            <li>Precipitation: 0%</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        const city = "Manchester";
        const apiKey = "fbe0f372ad6btocdfb0c2b3e5a4f5432";
        const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return <p>Loading ...</p>;
    }
}
