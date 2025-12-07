import { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp() {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    function handleResponse(response) {
        console.log(response.data.city);
        setTemperature(Math.round(response.data.temperature.current));
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
                        <h1>Manchester</h1>
                        <ul>
                            <li>
                                <strong>Saturday</strong> 08:21
                            </li>
                            <li>Mostly Sunny</li>
                        </ul>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-6">
                        <img
                            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                            alt="sunny"
                        />
                        <span className="temp">{temperature}</span>
                        <span className="unit">°C</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: 72%</li>
                            <li>Wind: 10 km/h</li>
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
     return (
        <p>Loading ...</p>
     )
    }
}
