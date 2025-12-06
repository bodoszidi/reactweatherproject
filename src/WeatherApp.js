import "./WeatherApp.css";

export default function WeatherApp() {
    return (
        <div className="WeatherApp">
            <div className="row">
                <form>
                    <div className="col-9">
                        <input
                            type="search"
                            placeholder="Enter a city"
                            className="form"
                        />
                    </div>
                    <div className="col-3">
                        <input
                            type="submit"
                            value="Search"
                            className="btn btn-primary"
                        ></input>
                    </div>
                </form>
            </div>
            <h1>Manchester</h1>
            <ul>
                <li>
                    <strong>Saturday</strong> 08:21
                </li>
                <li>Mostly Sunny</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img
                        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                        alt="sunny"
                    />
                    8°C
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
