import React from "react"

export default function Temperature() {
    let weatherData = {
        temperature: 5
    };
    return (
        <div className="Temperature">
            <div className="grid">
                {/* <img src={} alt="#" /> */}
                <div className="grid-temp-unit">
                    <h2>{weatherData.temperature}</h2>
                    <span>
                        <a href="#">°C</a> | <a href="#">°F</a>
                    </span>
                </div>
            </div>
            <div className="Card">
                <div className="description">{weatherData.description}</div>
                <div className="humidity">Humidity: {weatherData.humidity}%</div>
                <div className="wind">Wind: {weatherData.wind}km/h</div>
            </div>
        </div>
    );
}