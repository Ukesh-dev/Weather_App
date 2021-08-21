import React from 'react'
import './index.scss'
import Main from './components/Main'
import WeatherSide from './components/WeatherSide'
import WeatherMain from './components/MainWeather'
import {AppProvider} from './context';

function App() {
    
    return (
        <AppProvider>
        <Main>
            <WeatherSide></WeatherSide>
            <WeatherMain></WeatherMain>
        </Main>
        </AppProvider>
    )
}

export default App
