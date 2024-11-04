export type GeoZipData = {
  "zip": string,
  "name": string,
  "lat": number,
  "lon": number,
  "country": string
}

export type GeoCityData = {
  "name": string,
  "local_names":{ [key: string]: string },
  "lat": number,
  "lon": number,
  "country": string,
  "state": string
}

export type WeatherDetail = {
  "id": string,
  "main": string,
  "description": string,
  "icon": string,
}

export type CurrentWeatherData = {
  "dt": number,
  "sunrise": number,
  "sunset": number,
  "temp": number,
  "feels_like": number,
  "pressure": number,
  "humidity": number,
  "dew_point": number,
  "clouds": number,
  "uvi": number,
  "visibility": number,
  "wind_speed": number,
  "wind_gust": number,
  "wind_deg": number,
  "rain": {
    "1h": number
  },
  "snow": {
    "1h": number
  },
  weather: WeatherDetail[]
}

export type MinutelyWeatherData = {
  "dt": number,
  "precipitation": number,
}

export type HourlyWeatherData = {
  "dt": number,
  "temp": number,
  "feels_like": number,
  "pressure": number,
  "humidity": number,
  "dew_point": number,
  "clouds": number,
  "uvi": number,
  "visibility": number,
  "wind_speed": number,
  "wind_gust": number,
  "wind_deg": number,
  "pop": number,
  "rain": {
    "1h": number
  },
  "snow": {
    "1h": number
  },
  weather: WeatherDetail[]
}

export type DailyWeatherData = {
  "dt": number,
  "sunrise": number,
  "sunset": number,
  "moonrise": number,
  "moonset": number,
  "moon_phase": number,
  "summary": string,
  "temp": {
    "morn": number,
    "day": number,
    "eve": number,
    "night": number,
    "min": number,
    "max": number,
  },
  "feels_like": {
    "morn": number,
    "day": number,
    "eve": number,
    "night": number,
  },
  "pressure": number,
  "humidity": number,
  "dew_point": number,
  "clouds": number,
  "uvi": number,
  "visibility": number,
  "wind_speed": number,
  "wind_gust": number,
  "wind_deg": number,
  "pop": number,
  "rain": number,
  "snow": number,
  weather: WeatherDetail[]
}

export type AlertsWeatherData = {
  "sender_name": string,
  "event": string,
  "start": number,
  "end": number,
  "description": string,
  "tags": string,
}

export type WeatherData = {
  "lat": number,
  "lon": number,
  "timezone": string,
  "timezone_offset": number,
  "current": CurrentWeatherData,
  "minutely": MinutelyWeatherData[],
  "hourly": HourlyWeatherData[],
  "daily": DailyWeatherData[],
  "alerts": AlertsWeatherData[]
}

export type FormState = {
  "weather": WeatherData,
  "city": GeoCityData
}
