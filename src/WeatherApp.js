import { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp() {
    const [ready, setReady] = useState(false);
    const [weather, setWeather] = useState({});
    function handleResponse(response) {
        console.log(response);

        setWeather({
            temperature: Math.round(response.data.temperature.current),
            wind: response.data.wind.speed,
            city: response.data.city,
            humidity: response.data.temperature.humidity,
            condition: response.data.condition.description,
            img: response.data.condition.icon_url,
            weather: response.date.time,
        });

        setReady(true);
    }

    if (ready) {
        return (
            <div className="WeatherApp">
                <form>
                    <div className="row m-2">
                        <div className="col-9 py-4">
                            <input
                                type="search"
                                placeholder="Enter a city"
                                className="form w-100 py-1"
                                autoFocus="on"
                            />
                        </div>
                        <div className="col-3 py-4">
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
                                <strong>Saturday</strong> {weather.time}
                            </li>
                            <li>{weather.condition}</li>
                        </ul>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-6">
                        <img src={weather.img} alt={weather.condition} />
                        <span className="temp">{weather.temperature}</span>
                        <span className="unit">°C</span>
                    </div>
                    <div className="col-6">
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
