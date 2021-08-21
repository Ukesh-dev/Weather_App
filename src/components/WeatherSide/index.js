import React from 'react';
import { useGlobalContext } from '../../context'
// import {ReactComponent as Cloudy} from '../../images/icons/cloudy-night.svg'
function WeatherSide() {
    // const [error, setError] = React.useState(false);
    const {weatherInfo, weatherImage } = useGlobalContext();
    console.log(weatherInfo)
//    const [date, setDate] = React.useState('') 
    const {date, temp, icon, name, main} =weatherInfo;


    // if(Object.keys(weatherInfo).length > 0){
    // const {dt, main:{temp}, weather:main_report , name} = weatherInfo;
    // console.log(main_report)
    // const {icon, main} = main_report[0];
    // console.log(dt, temp,icon, main, name)
    // dt && convertDate(dt);
    // // setError(true);
    //   }
      return (
          <>
          {/* {Object.keys(weatherInfo).length > 0 && <h1>Icon<h1>} */}
    <div className = {`main__left ${weatherImage ? weatherImage : 'thunder'}`}>
    <div className="weather__report">
   {console.log("nepalese")}
                {/* <div className="degree"> */}
                    <span>{(temp - 272.15).toFixed(0)}<sup>&#176;c</sup></span>
                    {/* <span className="degree__sign">&#176;</span> */}
                {/* </div> */}
                <div className="weather__desc">
                    <h1 className = "elegantshadow">{name}</h1>
                    {/* <span className="time">6:09</span>
                    <span className="day">Monday</span>
                    <span className="date">9</span>
                    <span className="month">Sep</span>
                    <span className="year">2021</span> */}
                    <span>{date && date}</span>
                </div>
                <div className="weather__icon">
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                    <span className="weather__type">{main}</span>
                </div>
            </div> 
        </div>
    
   </> 
      )
                }
export default WeatherSide
