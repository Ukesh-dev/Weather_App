import React from 'react'
import {useGlobalContext} from '../../context'

function Main({children}) {
    const {weatherInfo, weatherImage, setWeatherImage} = useGlobalContext();
    
    const {icon} = weatherInfo;
    // console.log(icon);
    
    React.useEffect(()=> {
        if(icon){

        switch (icon) {
            case '01d':
            case '01n':
                setWeatherImage('sun');
                
                break;
            case '02d':
            case '02n':
            case'03n':
            case '03d':
            case'04d':
            case '04n':
            setWeatherImage('cloud');
            break;
            case '09d':
                case '09n':
                    case'10d':
                    case '10n':
                        setWeatherImage('rain');
            break;
            case '11d':
                case '11n':
                    setWeatherImage('snow');
                    break;
                    case '50d':
                    case '50n':
                        setWeatherImage('mist');
                        break;
        
            default:
                setWeatherImage('thunder');
        }
    }
    console.log(weatherImage);
        // }
    }, [icon, weatherImage, setWeatherImage])
    // if(icon){
    //     // const {icon} = weatherInfo;
    
    // //    console.log(icon); 
    return (
        <>
        <div className={`bg__image ${weatherImage ? weatherImage : 'snow'}`}>
            
        </div>
        <div className="wrapper">
        <section className="main container thunder">
            {children}
        </section>
        </div>
        </>
        
    )
}

export default Main
