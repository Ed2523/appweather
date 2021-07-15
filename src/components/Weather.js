import React, { useState, useEffect } from 'react';


const Weather = ({ region, location, condition, conditionIcon, temperature, input, setInput }) => {

    return (
        <div className="weather">


            <div className="weather-data">
                <h1>{location}</h1>
                <h1>{region}</h1>
                <div className="condition-container">
                    <img src={conditionIcon} alt="" />
                    <h1>{temperature}°</h1>
                    <h1>{condition}</h1>
                </div>
            </div>


        </div>
    );

}

export default Weather;