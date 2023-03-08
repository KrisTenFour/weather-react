import React from "react"

import "./Temperature.css"

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
                        <button>°C</button> | <button>°F</button>
                    </span>
                </div>
            </div>
        </div>
    );
}