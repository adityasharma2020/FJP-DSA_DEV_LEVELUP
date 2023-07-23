const OPEN_WEATHER_API_KEY = '3964a7c12d60830e7f6089a008b4a0ea'

export interface openWeatherData {
  name: string
  main: {
    feels_like: number
    humijdity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  weather: {
    description: string
    icon: string
    id: number
    main: string
  }[]
  wind: {
    deg: number
    speed: number
  }
}
export async function fetchOpenWeatherData(city: string): Promise<openWeatherData> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
  )

  if (!res.ok) {
    throw new Error('city not found!')
  }

  const data : openWeatherData= await res.json()
  return data
}
