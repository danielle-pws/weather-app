"use server";

import { FormState, GeoCityData, GeoZipData } from '@/components/weather/weatherTypes'

const FREE_APIKEY = 'dc68a65166fde74659654bb43e4d0cb2'



function zipFilter (zipCode: string | undefined) {

  console.log('zipFilter', zipCode)

  if (!zipCode) {
    return undefined;
  }

  zipCode = zipCode.toString().trim();

  console.log('zipFilter', zipCode)
  const us = new RegExp("\\d{5}(-{0,1}\\d{4})?");
  const ca = new RegExp(/([ABCEGHJ-NPRSTVXYabceghj-nprstvxy][0-9][ABCEGHJ-NPRSTV-Zabceghj-nprstv-z][ ]?[0-9][ABCEGHJ-NPRSTV-Zabceghj-nprstv-z][0-9])/i);

  const zipArray = us.exec(zipCode.toString())
  console.log('zipFilter - zipArray', zipArray)
  if (zipArray && zipArray[0]) {
    return {
      'zip': zipArray[0],
      'countryCode': 'US'
    }
  }

  const postalArray = ca.exec(zipCode.toString())
  console.log('zipFilter - postalArray', postalArray)
  if (postalArray && postalArray[0]) {
    return {
      'zip': postalArray[0],
      'countryCode': 'CA'
    }
  }

  return undefined;
}

async function fetchWeather(lat: number, lon: number) {
  const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${FREE_APIKEY}`)
  return await response.json();
}

async function fetchLocationName(lat: number, lon: number) {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${FREE_APIKEY}`)
  return await response.json();
}

export async function weatherAction(prevState: FormState | undefined, formData: FormData) {
  // use some hidden fields to get lat/long from browser api - form has button to fill these fields
  // otherwise use https://openweathermap.org/api/geocoding-api to convert city or zip code to lat/long
  const latString = formData.get('lat')?.toString()
  const lonString= formData.get('lon')?.toString()
  const name = formData.get('name')?.toString()
  const zipData = zipFilter(name)

  console.log('weatherAction formData', {latString, lonString, name, zipData})

  let lat: number | undefined = latString ? +latString : undefined
  let lon: number | undefined = lonString ? +lonString : undefined

  console.log('weatherAction - form - lat, lon', lat, lon)
  if (zipData) {
    const geoDataResponse = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipData.zip},${zipData.countryCode}&appid=${FREE_APIKEY}`)
    const geoData: GeoZipData = await geoDataResponse.json()
    lat = geoData.lat
    lon = geoData.lon
    console.log('weatherAction - zipData - lat, lon', geoData, lat, lon)
  } else if(name) {
    const geoDataResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${FREE_APIKEY}`)
    const geoData: GeoCityData[] = await geoDataResponse.json()
    lat = geoData[0].lat
    lon = geoData[0].lon
    console.log('weatherAction - name - lat, lon', geoData, lat, lon)
  }

  if (lat && lon) {
    const [weatherData, locationData] = await Promise.all([fetchWeather(lat, lon), fetchLocationName(lat, lon)])
    console.log('weatherAction - weatherData', weatherData, locationData)
    return {
      "weather": weatherData,
      "city": locationData[0]
    }
  }
}
