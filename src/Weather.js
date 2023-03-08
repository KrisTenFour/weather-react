import React from "react"
import Temperature from "./Temperature"

import "./Weather.css"

export default function Weather() {
    let weatherData = {
        description: "Light rain",
        humidity: 40,
        wind: 2
    };
    return (
        <div className="Weather">
            <form className="Search">
                <input type="text" placeholder="Enter city..." />
                <input type="submit" value="Search" className="button" />
            </form>
            <div className="City">
                <div>
                    <h1>London</h1>
                </div>
            </div>
            <Temperature />
            <div className="Card">
                <div className="description">{weatherData.description}</div>
                <div className="humidity">Humidity: {weatherData.humidity}%</div>
                <div className="wind">Wind: {weatherData.wind}km/h</div>
            </div>
        </div>
    );
}