import { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFehrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
            <span className="Temperature">
                <span className="temp">{props.data.temperature}</span>
                <span className="unit">
                    °C|{" "}
                    <a href="/" onClick={showFehrenheit}>
                        °F
                    </a>
                </span>
            </span>
        );
    } else {
        const fahrenheit = (props.data.temperature * 9) / 5 + 32;
        return (
            <span className="Temperature">
                <span className="temp">{(Math.round(fahrenheit))}</span>
                <span className="unit">
                    <a href="/" onClick={showCelsius}>
                        °C
                    </a>{" "}
                    | °F
                </span>
            </span>
        );
    }
}
