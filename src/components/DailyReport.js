import React from 'react'
import SwiperCore  from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
import {useGlobalContext} from '../context';

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function DailyReport() {
    const {dailyReport, convertDate} = useGlobalContext();
    console.log(dailyReport);  

  
    return (
            <Swiper  className="dailyReport"
            spaceBetween ={0} slidesPerView={4} breakpoints = {{
                320:{
                    slidesPerView: 4,
                },
                665:{
                    slidesPerView : 7,
                },
                1024:{
                    slidesPerView: 4,
                }

            }}> 
                           {  dailyReport && dailyReport.map((report, index) =>{
                    const {dt, temp:{day}, weather} = report;
                    console.log(weather)
                    const {id, main, icon} = weather[0];                   
                    console.log(id)
                  return (
                    
                    <SwiperSlide key ={`slide = ${index}`}><div className="dailyReport__container" key = {index}>
                <div className="dailyReport__container--date">
                    {convertDate(dt).day}
                </div>
                <div className="dailyReport__container--icon">
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={main} />
                </div>
                <div className="dailyReport__container--temp">
                <span>{(day - 272.15).toFixed(0)}<sup>&#176;c</sup></span>             
                <div className="dailyReport__weather">
                    {main}
                </div>
                </div>
            </div>
              </SwiperSlide>    ) 
               }) }
              </Swiper>
    )
}

export default DailyReport
