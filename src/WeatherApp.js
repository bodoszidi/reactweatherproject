import { useState } from "react";
import "./WeatherApp.css";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function WeatherApp() {
    const [weather, setWeather] = useState({ ready: false });
    const [city, setCity] = useState("Manchester");

    function handleResponse(response) {
        setWeather({
            ready: true,
            temperature: Math.round(response.data.temperature.current),
            wind: response.data.wind.speed,
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            humidity: response.data.temperature.humidity,
            condition: response.data.condition.description,
            icon: response.data.condition.icon,
        });
    }

    function search() {
        const apiKey = "fbe0f372ad6btocdfb0c2b3e5a4f5432";
        const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function handleCity(event) {
        setCity(event.target.value);
    }

    if (weather.ready) {
        return (
            <div className="WeatherApp">
                <form onSubmit={handleSubmit}>
                    <div className="row m-2">
                        <div className="col-12 col-md-9 py-md-4 ">
                            <input
                                type="search"
                                placeholder="Enter a city"
                                className="form w-100 py-1"
                                autoFocus="on"
                                onChange={handleCity}
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
                <WeatherInfo data={weather} />
            </div>
        );
    } else {
        search();
    }
}
