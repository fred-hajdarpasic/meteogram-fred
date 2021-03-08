import React, { useEffect, useState, useContext } from 'react';
import styles from './Dropdown.module.css';

interface SelectDaysProps {
    days: number,
    setDays: (days: number) => void
}

const DAYS = ["1", "2", "3"]

const SelectDays = ({ days, setDays }: SelectDaysProps) => {
    return <div className={styles.dropdown}>
        <label htmlFor="day-select">Choose days:</label>
        <select id="day-select" onChange={(e) => setDays(Number.parseInt(e.target.value))} value={days}>
            {DAYS.map(day => <option value={day} key={day}>{day}</option>)}
        </select>
    </div>
}

export default SelectDays;

