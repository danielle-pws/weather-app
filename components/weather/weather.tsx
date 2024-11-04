'use client'

import { useActionState, useEffect, useState } from 'react'
import { weatherAction } from '@/components/weather/actions'
import { FormState, GeoCityData, WeatherData } from '@/components/weather/weatherTypes'
import { WeatherCurrent } from '@/components/weather/WeatherCurrent'
import { WeatherHourly } from '@/components/weather/WeatherHourly'

const initialState: FormState | undefined = undefined

export function Weather() {
  const [state, formAction, isPending] = useActionState(weatherAction, initialState)
  const [isReady, setReady] = useState(false)
  const [position, setPosition] = useState<GeolocationPosition>()
  const weather: WeatherData = state?.weather
  const city: GeoCityData = state?.city

  useEffect(() => {
    if (typeof window !== "undefined") {
      window?.navigator?.geolocation?.getCurrentPosition((newPosition) => {
        console.log('Weather - useEffect getCurrentPosition', newPosition)
        setPosition(newPosition)
        setReady(true)
      }, (positionError) => {
        console.log('Weather - useEffect getCurrentPosition', positionError)
        setReady(true)
      })
    } else {
      setReady(true)
    }
  }, [])

  const nameValue: string | undefined = city?.name ? `${city?.name}${city?.state ? `, ${city?.state}` : ''}${city?.country ? `, ${city?.country}` : ''}` : undefined
  return (
    <div>
      <form className="max-w-sm mx-auto" action={formAction}>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">Search by Postal Code or City</label>
        <input type="text" id="name" name="name"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               defaultValue={nameValue}
               placeholder="eg. Kelowna, British Columbia" disabled={isPending}/>
        <input type="hidden" id="lat" name="lat" defaultValue={position?.coords?.latitude || ''}/>
        <input type="hidden" id="lon" name="lon" defaultValue={position?.coords?.longitude || ''}/>
        <button
          className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          disabled={isPending && isReady}
        >
          Submit
        </button>
      </form>

      <h2 className='font-bold font-3xl pt-5 pb-3'>{city?.name}{city?.state ? `, ${city?.state}` : ''}</h2>
      <div>
        <WeatherCurrent current={weather?.current}/>
        <WeatherHourly hourly={weather?.hourly} />
      </div>
    </div>
  )
}
