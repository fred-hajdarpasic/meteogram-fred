import { Forecast, ForecastData } from './types'

const URL = `https://ws.weatherzone.com.au`;

const covertForecast = (forecast: any): ForecastData => {
    return forecast as ForecastData;
}

const getForecastFor = async (locationCode: string, days: number) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const response: Response = await fetch(`${URL}/?lt=aploc&lc=${locationCode}&locdet=1&latlon=1&pdf=twc(period=48,detail=2)&u=1&format=json`, options);
    if(response.ok) {
        const data = await response.json();
        const timeseries: ForecastData[] = data.countries[0].locations[0].part_day_forecasts.forecasts.map((forecast: any) => covertForecast(forecast));
        const date = data.metadata.create_time as string;
        console.log(`${JSON.stringify(timeseries)}`);
        return {date: date, forecastData: timeseries} as Forecast;
    } else {
        throw `API call failed`
    }
}

export default getForecastFor;