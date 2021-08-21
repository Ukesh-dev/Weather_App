import React from 'react'
import {useGlobalContext} from '../context';
function DailyReport() {
    const {dailyReport, convertDate} = useGlobalContext();
    console.log(dailyReport);
    return (
        <div className = 'dailyReport'>
            {  dailyReport && dailyReport.map((report, index) =>{
                    const {dt, temp:{day}, weather} = report;
                    console.log(weather)
                    const {id, main, icon} = weather[0];                   
                    console.log(id)
                  return (
                    
            <div className="dailyReport__container" key = {index}>
                <div className="dailyReport__container--date">
                    {convertDate(dt).day}
                </div>
                <div className="dailyReport__container--icon">
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={main} />
                </div>
                <div className="dailyReport__container--temp">
                <span>{(day - 272.15).toFixed(0)}<sup>&#176;c</sup></span>             
                </div>
            </div>
                  ) 
               }) }
        </div>
    )
}

export default DailyReport
