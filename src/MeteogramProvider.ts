import { createContext } from 'react';
import { Forecast } from './services/types'

export interface MeteogramContextProps {
    locationCode: string;
    forecast: Forecast,
    presentation: string;
    optional: string[]
}

export const MeteogramContext = createContext<MeteogramContextProps>({
    locationCode: '', 
    forecast: 
    {
        date: '', forecastData: []
    },
    presentation: 'CHART',
    optional: []
});