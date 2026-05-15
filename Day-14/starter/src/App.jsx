import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'

// Mock weather data (replace with real API if you have an API key)
const mockWeather = {
  london: { city: 'London', temp: 14, humidity: 72, wind: 15, condition: 'Cloudy', icon: '☁️' },
  tokyo: { city: 'Tokyo', temp: 26, humidity: 65, wind: 8, condition: 'Sunny', icon: '☀️' },
  paris: { city: 'Paris', temp: 18, humidity: 58, wind: 12, condition: 'Partly Cloudy', icon: '⛅' },
  mumbai: { city: 'Mumbai', temp: 32, humidity: 80, wind: 20, condition: 'Rainy', icon: '🌧️' },
}

function App() {
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')
  const [favorites, setFavorites] = useState([])

  const handleSearch = (city) => {
    const data = mockWeather[city.toLowerCase()]
    if (data) { setWeather(data); setError('') }
    else { setWeather(null); setError(`City "${city}" not found. Try: London, Tokyo, Paris, Mumbai`) }
  }

  const toggleFavorite = (city) => {
    setFavorites(prev => prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Weather Dashboard</h1>
        <SearchBar onSearch={handleSearch} />
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {weather && <WeatherCard {...weather} isFavorite={favorites.includes(weather.city)} onToggleFavorite={() => toggleFavorite(weather.city)} />}
        {favorites.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Favorites</h2>
            <div className="grid grid-cols-2 gap-4">
              {favorites.map(city => {
                const data = mockWeather[city.toLowerCase()]
                return data ? <WeatherCard key={city} {...data} isFavorite onToggleFavorite={() => toggleFavorite(city)} /> : null
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
