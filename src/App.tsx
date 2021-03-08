import React, { useEffect, useState, useContext } from 'react';
import getForecastFor from './services/getForecastFor';
import { Forecast } from './services/types';

import logo from './logo.svg';
import './App.css';
import ForecastAsChart from './components/DailyAsChart';
import DailyAsTable from './components/DailyAsTable';
import { MeteogramContext } from './MeteogramProvider';
import SelectLocationDropdown from './components/SelectLocationDropdown';
import SelectDaysDropdown from './components/SelectDaysDropdown';
import SelectPresentation from './components/SelectPresentation';
import SelectOptional from './components/SelectOptional';

const Meteogram = () => {
    const { forecast, locationCode, presentation } = useContext(MeteogramContext);
    if(forecast.forecastData.length === 0) return null;
    return <div style={{ display: 'flex' }}>
        {presentation === 'TABLE' &&
            <DailyAsTable />
        }
        {presentation === 'CHART' &&
            <ForecastAsChart />
        }
    </div>
}

function App() {
    const [forecast, setForecast] = useState({
        date: '', forecastData: []
    } as Forecast)
    const [locationCode, setLocationCode] = useState('')
    const [presentation, setPresentation] = useState('CHART')
    const [days, setDays] = useState(2)
    const [workingOnIt, setWorkingOnIt] = useState(false)
    const [optional, setOptional] = useState([] as string[])
    useEffect(() => {
        (async () => {
            try {
                setWorkingOnIt(true);
                if (locationCode) {
                    const forecast = await getForecastFor(locationCode, days);
                    setForecast(forecast);
                }
            } finally {
                setWorkingOnIt(false);
            }
        })();
    }, [locationCode, days]);
    return (
        <div className="App">
            <div style={{display: 'flex'}}>
                <SelectLocationDropdown locationCode={locationCode} setLocationCode={setLocationCode} />
                <SelectDaysDropdown days={days} setDays={setDays} />
                <SelectPresentation presentation={presentation} setPresentation={setPresentation} />
                <SelectOptional optional={optional} setOptional={setOptional} />
            </div>
            {!workingOnIt && <MeteogramContext.Provider value={{ locationCode, forecast, presentation, optional }}>
                <Meteogram />
            </MeteogramContext.Provider>
            }
        </div>
    );
}

export default App;
