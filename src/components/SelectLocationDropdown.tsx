import React from 'react';
import styles from './Dropdown.module.css';

interface SelectLocationProps {
    locationCode: string,
    setLocationCode: (location: string) => void
}

export const locations = [
    {name: "Adelaide", code: "12495"},
    {name: "Brisbane", code: "9388"},
    {name: "Canberra", code: "3928"},
    {name: "Darwin", code: "11"},
    {name: "Hobart", code: "15465"},
    {name: "Melbourne", code: "5594"},
    {name: "Perth", code: "13896"},
    {name: "Sydney", code: "624"}
]
const SelectLocation = ({ locationCode, setLocationCode }: SelectLocationProps) => {
    return <div className={styles.dropdown}>
        <label htmlFor="location-select">Choose a location:</label>
        <select id="location-select" onChange={(e) => setLocationCode(e.target.value)} value={locationCode}>
            <option value="">--Please choose location--</option>
            {locations.map(loc => <option value={loc.code} key={loc.code}>{loc.name}</option>)}
        </select>
    </div>
}

export default SelectLocation;