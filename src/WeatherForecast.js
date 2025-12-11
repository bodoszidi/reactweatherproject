import { useState, useEffect } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import './WeatherForecast.css';

export default function WeatherForecast(props) {
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        const apiKey = "fbe0f372ad6btocdfb0c2b3e5a4f5432";
        const city = props.data;
        const apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

        axios.get(apiURL).then((response) => {
            setForecast(response.data.daily.slice(0, 5)); // first 5 days
        });
    }, [props.data]);

    if (!forecast) {
        return <p>Loading forecast...</p>;
    }

    return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map((day, index) => (
                    <div className="col" key={index}>
                        <div className="WeatherForecast-day">
                            {new Date(day.time * 1000).toLocaleDateString("en-UK", {
                                weekday: "short",
                            })}
                        </div>

                        <WeatherIcon code={day.condition.icon} size={34} />

                        <div className="WeatherForecast-temperatures">
                            <span className="WeatherForecast-temperature-max">
                                {Math.round(day.temperature.maximum)}°
                            </span>
                            <span className="WeatherForecast-temperature-min">
                                {Math.round(day.temperature.minimum)}°
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
