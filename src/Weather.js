import React from "react"
import Temperature from "./Temperature"

import "./Weather.css"

export default function Weather() {
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
        </div>
    );
}