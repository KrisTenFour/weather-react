import React from "react"
import Search from "./Search"
import Temperature from "./Temperature"

export default function Weather() {
    return (<div className="Weather">
        <Search />
        <Temperature />
    </div>)
}