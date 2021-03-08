import React, {useContext} from 'react';
import Highcharts, { XAxisOptions } from 'highcharts';
import {
    HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, Title, Subtitle, Legend, LineSeries, Tooltip, ItemSeries, BarSeries
} from 'react-jsx-highcharts';
import { Forecast } from '../services/types';
import { MeteogramContext } from '../MeteogramProvider';
import { locations } from './SelectLocationDropdown'
interface MeteogramProps {
    locationCode: string,
    forecast: Forecast,
    optional: string[]
}

const ForecastAsChart = () => {
    const {forecast, locationCode, optional}: MeteogramProps = useContext(MeteogramContext);

    const precipitationSeries: number[] = forecast.forecastData.map(item => item.rain_prob);
    const temperatureSeries: number[] = forecast.forecastData.map(item => item.temperature);
    const windSpeedSeries: number[] = forecast.forecastData.map(item => item.wind_speed);
    const windDirectionSeries: number[] = forecast.forecastData.map(item => item.wind_direction);

    const humiditySeries: number[] = forecast.forecastData.map(item => item.relative_humidity);
    const pressureSeries: number[] = forecast.forecastData.map(item => item.pressure);

    const timePoints = forecast.forecastData.map(d => new Date(d.utc_time)).map(t => t.getHours()).map(h => `${h}:00`)
    const location = locations.find(l => l.code === locationCode)
    console.log(`windDirectionSeries=${JSON.stringify(windDirectionSeries)}`)
    const title = `Weather Forecast for ${location?.name} for ${forecast.date}`;
    return <div className="app">
        <HighchartsProvider Highcharts={Highcharts}>
            <HighchartsChart>
                <Chart />

                <Title>{title}</Title>

                <Subtitle>Source: www.weatherzone.com.au</Subtitle>

                <Legend layout="vertical" align="right" verticalAlign="middle" />
                <Tooltip valueSuffix="" shared />

                <XAxis categories={timePoints}>
                    <XAxis.Title>Time</XAxis.Title>
                </XAxis>

                <YAxis>
                    <YAxis.Title>Various Forecast Data</YAxis.Title>
                    <LineSeries name="Precipitation" data={precipitationSeries}/>
                    <LineSeries name="Temperature" data={temperatureSeries} />
                    <LineSeries name="Wind Speed" data={windSpeedSeries} />

                    { optional.includes('pressure') &&
                        <LineSeries name="Pressure" data={pressureSeries} />
                    }
                    { optional.includes('humidity') &&
                        <LineSeries name="Humidity" data={humiditySeries} />
                    }
                    { optional.includes('windDirection') &&
                        <LineSeries name="Wind Direction" data={windDirectionSeries} />
                    }
                </YAxis>
            </HighchartsChart>
        </HighchartsProvider>
    </div>
};

export default ForecastAsChart;