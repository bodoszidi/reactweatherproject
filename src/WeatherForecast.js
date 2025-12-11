import WeatherIcon from "./WeatherIcon";



export default function WeatherForecast(props) {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Mon</div>
                    <WeatherIcon code= "few-clouds-day" size={34}/>
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">25°</span>
                        <span className="WeatherForecast-temperature-min">15°</span>
                    </div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-day">Tue</div>
                    <WeatherIcon code= "few-clouds-day" size={34}/>
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">22°</span>
                        <span className="WeatherForecast-temperature-min">14°</span>
                    </div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-day">Wed</div>
                    <WeatherIcon code="few-clouds-day"size={34}/>
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">20°</span>
                        <span className="WeatherForecast-temperature-min">13°</span>
                    </div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <WeatherIcon code= "few-clouds-day"size={34}/>
                    <div className="WeatherForecast-temperatures">              
                        <span className="WeatherForecast-temperature-max">21°</span>
                        <span className="WeatherForecast-temperature-min">12°</span>
                    </div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-day">Fri</div>
                    <WeatherIcon code= "few-clouds-day"size={34}/>
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">24°</span>
                        <span className="WeatherForecast-temperature-min">16°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}   