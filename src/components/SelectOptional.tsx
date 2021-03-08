import React, { useEffect, useState, useContext } from 'react';
import styles from './Dropdown.module.css';

interface SelectOptionsProps {
    optional: string[],
    setOptional: (optional: string[]) => void
}

const OPTIONS = ["CHART", "TABLE"]

const SelectOptional = ({ optional, setOptional }: SelectOptionsProps) => {
    const addOption = (option: string) => {
        if(!optional.includes(option)) {
            optional.push(option);
            setOptional(optional);
        }
        console.log(`optional = ${optional}`)
    }
    const removeOption = (option: string) => {
        if(optional.includes(option)) {
            const temp = optional.filter(e => e !== option);
            setOptional(optional);
        }
        console.log(`optional = ${optional}`)
    }

    const [pressure, setPressure] = useState(false);
    const [humidity, setHumidity] = useState(false);
    const [windDirection, setWindDirection] = useState(false);

    useEffect(() => {
        const temp = []
        if(pressure) {
            temp.push('pressure');
        }
        if(humidity) {
            temp.push('humidity');
        }
        if(windDirection) {
            temp.push('windDirection');
        }
        setOptional(temp);
    }, [pressure, humidity, windDirection]);
    return <div>
        <label htmlFor="show-pressure-select">Show Pressure:</label>
        <input onChange={(e) => setPressure(!pressure)} type="checkbox" checked={pressure}/>
        <label htmlFor="show-humidity-select">Show Humidity:</label>
        <input onChange={(e) => setHumidity(!humidity)} type="checkbox" checked={humidity}/>
        <label htmlFor="show-wind-direction-select">Show Wind Direction:</label>
        <input onChange={(e) => setWindDirection(!windDirection)} type="checkbox" checked={windDirection}/>
    </div>
}

export default SelectOptional;

