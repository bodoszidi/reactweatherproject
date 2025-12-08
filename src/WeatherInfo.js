import FormatedDate from "./FormatedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import './WeatherInfo.css';


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
                    <Temperature data={props.data} />
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
