import { PollutionData } from '@/components/weather/weatherTypes'

export function Pollution({pollution}: {pollution: PollutionData | undefined}) {
  if (!pollution) {
    return null
  }

  const [pollutionDetails] = pollution?.list

  return (
    <div className='pollution my-2 border-blue-800 border-2 rounded-3xl max-w-sm bg-blue-100 flex flex-row gap-6 items-center justify-around p-2'>
      <div>
        <span className='text-6xl align-text-top'>{pollutionDetails.main.aqi.toFixed(0)}</span>
      </div>
      <div>
        <p className='text-lg capitalize'>Air Quality Index</p>
      </div>
    </div>
  )
}
