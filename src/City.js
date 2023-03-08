import React from "react"

export default function City() {
    let weatherData = {
        city: "London"
    };
    return (
        <div className="City">
            <div>
                <h1>{weatherData.city}</h1>
            </div>
        </div>
    );
}