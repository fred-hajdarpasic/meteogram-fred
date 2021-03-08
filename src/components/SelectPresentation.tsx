import React, { useEffect, useState, useContext } from 'react';
import styles from './Dropdown.module.css';

interface SelectPresentationProps {
    presentation: string,
    setPresentation: (presentation: string) => void
}

const OPTIONS = ["CHART", "TABLE"]

const SelectPresentation = ({ presentation: presentation, setPresentation: setPresentation }: SelectPresentationProps) => {
    return <div className={styles.dropdown}>
        <label htmlFor="chart-or-table-select">Choose presentation style:</label>
        <select id="chart-or-table-select" onChange={(e) => setPresentation(e.target.value)} value={presentation}>
            {OPTIONS.map(day => <option value={day} key={day}>{day}</option>)}
        </select>
    </div>
}

export default SelectPresentation;

