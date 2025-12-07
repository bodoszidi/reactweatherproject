import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    console.log("props.weather", props);
    return (
        <div className="WeatherInfo">
            <div className="row m-2">
                <div className="col-12">
                    <h1>{props.data.city}</h1>
                    <ul>
                        <li>
                            <FormatedDate date={props.data.date} />
                        </li>
                        <li>{props.data.condition}</li>
                    </ul>
                </div>
            </div>
            <div className="row m-2">
                <div className="col-12 col-md-6">
                    <WeatherIcon className="img" code={props.data.icon} />

                    <span className="temp">{props.data.temperature}</span>
                    <span className="unit">°C</span>
                </div>
                <div className="col-12 col-md-6">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/h</li>
                        <li>Precipitation: 0%</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
