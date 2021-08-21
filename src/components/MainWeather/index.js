import React from 'react'
import Search from '../Search'; 
import Weather from '../Report'
import DailyReport from '../DailyReport';
function WeatherMain(){
    return (
        <div className="main__right">
            <Search></Search>
            <DailyReport/>
            <Weather></Weather>
        </div>
    )
}

export default WeatherMain
