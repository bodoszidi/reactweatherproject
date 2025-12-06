import "./WeatherApp.css";

export default function WeatherApp() {
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
                <div classname="col-12">
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
                    <span className="temp">8</span>
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
}
