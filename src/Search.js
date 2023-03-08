import React from "react"

export default function Search() {
    return (
        <form className="Search">
            <input type="text" placeholder="Enter city..." />
            <input type="submit" value="Search" className="button" />
        </form>
    );
}