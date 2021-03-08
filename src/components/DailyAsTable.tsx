import React, {useContext} from 'react';
import { MeteogramContext } from '../MeteogramProvider';
import styles from './Table.module.css';
import { locations } from './SelectLocationDropdown'

const DailyAsTable = () => {
    const { forecast, locationCode, optional } = useContext(MeteogramContext);
    const location = locations.find(l => l.code === locationCode);
    return <table className={styles.meteogramTable}><caption>Hourly Forecast for {location?.name} for {forecast.date}</caption>
        <thead>
            <tr>
                <th>Hour</th>
                <th>Temperature [°C]</th>
                <th>Precipitation [mm]</th>
                <th>Wind speed [km/h]</th>
                <th>Wind Direction</th>
                { optional.includes('pressure') &&
                    <th>Pressure</th>
                }
                { optional.includes('humidity') &&
                    <th>Humidity</th>
                }
                { optional.includes('windDirection') &&
                    <th>Wind Direction</th>
                }
            </tr>
        </thead>
        <tbody>
            {
                forecast.forecastData.map((hour, i) => {
                    return <tr key={i}>
                        <td>{`${new Date(hour.utc_time).getHours()}:00`}</td>
                        <td>{hour.temperature}</td>
                        <td>{hour.rain_prob}</td>
                        <td>{hour.wind_speed}</td>
                        <td>{hour.wind_direction}</td>
                        {/* <td>{hour.wind_direction_compass}</td> */}
                        { optional.includes('pressure') &&
                            <td>{hour.pressure}</td>
                        }
                        { optional.includes('humidity') &&
                            <td>{hour.relative_humidity}</td>
                        }
                        { optional.includes('windDirection') &&
                            <td>{hour.wind_direction}</td>
                        }
                    </tr>
                })
            }
        </tbody>
    </table>
}

export default DailyAsTable;