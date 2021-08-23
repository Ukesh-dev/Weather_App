import React from 'react'
import {ReactComponent as Pressure} from '../../images/icons/pressure.svg'
import {ReactComponent as Humidity} from '../../images/icons/humidity.svg'
import {ReactComponent as Sunrise} from '../../images/icons/sunrise.svg'
import {ReactComponent as Sunset} from '../../images/icons/sunset.svg'
import {useGlobalContext} from '../../context';

function Weather() {
    const {weatherInfo } = useGlobalContext();
    const {humidity, pressure, sunrise, sunset  } = weatherInfo
    weatherInfo && console.log(humidity, pressure, sunrise, sunset)
    return (
        <div className="weather__info">
            <h4>Weather Info</h4>
            <div className="weather__box">
                <div className="weather__desc">
                    <span className="weather__img">
                        <Sunrise stroke ="#fff" width="40px" height="60px"/>
                    </span>
                    <span className="weather__type">
                        {/* <span>{sunrise_day}</span> */}
                        <span>{sunrise}</span>
                        <span>Sunrise</span>
                    </span>
                    
                </div>
                
                <div className="weather__desc">
                    <span className="weather__img">
                        <Sunset stroke ="#fff" width="40px" height="60px"/>
                    </span>
                    <span className="weather__type">
                        {/* <span>{sunset_day}</span> */}
                        <span>{sunset}</span>
                        <span>Sunset</span>
                    </span>
                    
                </div> 
                <div className="weather__desc">
                    <span className="weather__img">
                        <Humidity stroke = "#fff" width="90px" height="60px"/>
                                            </span>
                    <span className="weather__type">
                        
                        <span>{humidity}</span>
                        <span>Humidity</span>
                    </span>
                    
                </div>
                <div className="weather__desc">
                    <span className="weather__img">
<Pressure stroke ="#fff" width="60px" height="40px"/>

                    </span>
                    <span className="weather__type">
                        <span>{pressure}</span>
                        <span>Pressure</span>
                    </span>
                    
                </div>
            </div>
        </div>
    )
}

export default Weather
