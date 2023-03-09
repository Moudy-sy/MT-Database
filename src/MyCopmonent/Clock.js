import React, { useState, useEffect } from "react";
import "./Clock.css"; // import your CSS file

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        // update the date every second
        const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const fullDate = date.toLocaleString("en-US", options);
    const currentTime = date.toLocaleTimeString();

    return (
        <div className="clock-container">
            <div className="date">Today is {fullDate}</div>
            <div className="time">Current Time: {currentTime}</div>
        </div>
    );
}

export default Clock;
