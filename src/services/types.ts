export interface ForecastData {
    utc_time: string,
    local_time: string,
    tz: string,
    time_zone: string,
    temperature: number,
    feels_like_c: number,
    precis: string,
    dew_point: number,
    relative_humidity: number,
    wind_direction: number,
    wind_direction_compass: string,
    wind_speed: number,
    pressure: number,
    cloud_cover_oktas: number,
    cloud_cover_percent: number,
    rain_prob: number,
    rate: number,
    icon_phrase: string,
    icon_filename: string
}

export interface Forecast {
    date: string,
    forecastData: ForecastData[]
}