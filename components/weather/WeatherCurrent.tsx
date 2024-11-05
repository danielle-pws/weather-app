import { CurrentWeatherData } from '@/components/weather/weatherTypes'
import Image from 'next/image'

export function WeatherCurrent({current}: {current: CurrentWeatherData | undefined}) {
  if (!current) {
    return null
  }

  const [weatherDetails] = current?.weather
  const iconSrc = `https://openweathermap.org/img/wn/${weatherDetails.icon}@2x.png`

  return (
    <div className='my-2 border-blue-800 border-2 rounded-3xl max-w-sm bg-blue-100 flex flex-row gap-6 items-center p-2'>
      <div>
        <Image
          src={iconSrc}
          alt={weatherDetails.description}
          width={100}
          height={100}
        />
      </div>
      <div>
        <span className='text-6xl align-text-top'>{current.temp.toFixed(0)}<sup><span className='text-base'>°C</span></sup></span>
      </div>
      <div>
        <p className='text-lg capitalize'>{weatherDetails.description}</p>
        <p>Feels Like {current.feels_like.toFixed(0)}<sup className='text-xs'>°C</sup></p>
      </div>
    </div>
  )
}
