import React from "react"
import Temperature from "./Temperature"
import City from "./City"

export default function Weather() {
    return (
        <div className="Weather">
            <form className="Search">
                <input type="text" placeholder="Enter city..." />
                <input type="submit" value="Search" className="button" />
            </form>
            <City />
            <Temperature />
        </div>
    );
}