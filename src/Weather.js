import React from "react"
import Search from "./Search"
import Temperature from "./Temperature"
import City from "./City"

export default function Weather() {
    return (<div className="Weather">
        <Search />
        <City />
        <Temperature />
    </div>)
}