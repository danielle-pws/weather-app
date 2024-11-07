import { HourlyWeatherData } from '@/components/weather/weatherTypes'
import Image from 'next/image'


function WeatherHour({hwd}: {hwd: HourlyWeatherData} ) {
  const date = new Date(hwd.dt*1000)
  const hour = date.getHours()
  const day = date.getDay()
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const [weatherDetails] = hwd?.weather
  const iconSrc = `https://openweathermap.org/img/wn/${weatherDetails.icon}@2x.png`

  return (
    <div className='border-blue-800 rounded-xl w-28 h-64 bg-blue-200 flex-grow-0 flex flex-col gap-1 items-center p-3 m-1'>
      <p className='font-semibold mt-3 text-center'>{dayNames[day]}<br />{hour >= 12 ? `${hour - 12} pm` : hour == 0 ? '12 am' : `${hour} am`}</p>
      <div>
        <Image
          src={iconSrc}
          alt={weatherDetails.description}
          width={50}
          height={50}
        />
      </div>
      <div>
        <span className='text-6xl align-text-top'>{hwd.temp.toFixed(0)}<sup><span className='text-base'>°C</span></sup></span>
      </div>
      <div className='text-sm w-24 mx-auto'>
        <p>Feels Like {hwd.feels_like.toFixed(0)}<sup className='text-xs'>°</sup></p>
        <p>POP {hwd.pop*100}%</p>
      </div>
    </div>
  )
}

export function WeatherHourly ({ hourly }: { hourly: HourlyWeatherData[] | undefined}) {
  if (!hourly) {
    return null
  }

  return (
    <div className='hourly flex flex-row gap-2 items-center w-screen max-w-3xl overflow-auto'>
      {hourly.map(hour => (
        <WeatherHour key={hour.dt} hwd={hour} />
      ))}
    </div>
  )
}
