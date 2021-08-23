import  React from 'react';
import { useState, useContext } from "react";
import moment from 'moment';
import { Country, City } from 'country-state-city';
import instance from './axios';
// import axios from 'axios';
// import axios from 'axios';
const AppContext = React.createContext(null);

const API_key =  'f4e3f8f90248bd4a9889c78eb2b123b3';

    // let date= '';
 const convertDate = (dt) => {
        let newdt = dt * 1000;
       const time =  moment(newdt).format("LT dddd D MMM YYYY")
    //    console.log(time);
       let fullDate = time;
       let day = moment(newdt).format("ddd");
       let time_min = moment(newdt).format("LT");
       return {fullDate, day, time_min};
    }

export const AppProvider = ({children})=> {
//    const getCity = () => {
//        let city = localStorage.getItem('city')? localStorage.getItem("city"): 'nepal'
//      return city;
//    } 
   
    const [searchValue, setSearchValue] = React.useState('')
     const [weatherInfo, setWeatherInfo] = useState({})  
    const [error, setError] = useState(false);
      const [weatherImage, setWeatherImage] = React.useState('');
      const [dailyReport, setDailyReport] = React.useState([])

    const fetchData = async ()=> {
    try {
        const resp = await instance.get(`weather?q=pharping&appid=${API_key}`);
        const data = await resp.data;
        console.log(resp);
        const {dt, main:{temp, humidity, pressure}, weather:main_report , name, coord, sys:{sunrise, sunset}} = data;
        console.log(humidity, pressure, sunrise, sunset)
    // console.log(main_report)
    const {icon, main} = main_report[0];
    const {lat, lon}  = coord;
    console.log(lat, lon)

// const API_daily = 'https://api.openweathermap.org/data/2.5/'

    // console.log(dt, temp,icon, main, name)
//    convertDate(dt);o
        setWeatherInfo({date: convertDate(dt).fullDate, temp, icon, name, main, sunrise: convertDate(sunrise).time_min, sunset : convertDate(sunset).time_min,sunrise_day: convertDate(sunrise).day, sunset_day: convertDate(sunset).day, humidity, pressure});
        
        const oneCall =  await instance.get(`onecall?lat=${lat}&lon=${lon}&exclude=current, minutely, hourly, alerts&appid=${API_key}`)
        // console.log(oneCall.data.daily)
        const {daily} = oneCall.data;
        // console.log(daily);
        setDailyReport(daily);
        // console.log(dailyReport);

    } catch(error) {
        console.log(error);
        // setWeatherInfo()
    }
    }   

    
    const [searchResults, setSearchResults] = React.useState([])
     React.useEffect(()=> {
        // localStorage.setItem("city", searchValue)
         fetchData();

         const countries = Country.getAllCountries();
        //  console.log(countries)
         const cities = City.getAllCities();
         const countryName = countries.map((country)=>{
             return country.name;
         })
         const cityName = cities.map((city) => {
             return city.name;
         })
        //  console.log(countryName, cityName);
         setSearchResults([...cityName, ...countryName]);
    },[])
    // console.log(searchResults)

   

    React.useEffect(() => {
        if(error){
        const errorTime = setTimeout(() => {setError(false)}, 2000);
        return () => {
             clearTimeout(errorTime);

        }
        }
    }, [error])
    // console.log(searchValue)
    // console.log(weatherInfo);
    const getData = async(option)=> {
        try {
        localStorage.setItem("city", searchValue);
        const resp = await instance.get(`weather?q=${option}&appid=${API_key}`);
            const data =await resp.data;
              const {dt, main:{temp, humidity, pressure}, weather:main_report , name, coord, sys:{sunrise, sunset}} = data;
        // console.log(main_report)
        // console.log(humidity, pressure, sunrise, sunset)
        const {icon, main} = main_report[0];
        const {lat, lon}  = coord;
        console.log(lat, lon)
    
        // console.log(main)
        // console.log(dt, temp,icon, main, name)
        // dt && convertDate(dt);
        setWeatherInfo({ humidity, pressure, sunrise:convertDate(sunrise).time_min, sunrise_day: convertDate(sunrise).day, sunset_day: convertDate(sunset).day, sunset:convertDate(sunset).time_min,  date: convertDate(dt).fullDate, temp, icon, name, main});
        console.log(weatherInfo);
        const oneCall =  await instance.get(`onecall?lat=${lat}&lon=${lon}&exclude=current, minutely, hourly, alerts&appid=${API_key}`)
        // console.log(oneCall.data.daily)
        const {daily} = oneCall.data;
        // console.log(daily);
        setDailyReport(daily);
        } catch(error) {
            // console.log(error);
            setError(true);
            // setSearchValue(getCity());
        }
    }   
    
    
    const handleSubmit =  (e) => {
        e.preventDefault()
        // console.log(searchValue);
        // console.log(searchResults)
        // const Result = searchResults.filter((result)=>{
        // //    if(index < 10){
        // if(result.toLowerCase().includes(searchValue.toLowerCase())){
        //     // console.log("Yes!!!");
        //     return result;
        //     }

        //    } 

        // })
        // if(Result.length > 10){
        // Result.length = 10;
        // }
        // console.log(Result);
        
        getData(searchValue);
    }
   


    return <AppContext.Provider value={{handleSubmit, setSearchValue, searchValue, weatherInfo, setWeatherInfo, searchResults, getData , error, weatherImage, setWeatherImage, dailyReport, convertDate}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}