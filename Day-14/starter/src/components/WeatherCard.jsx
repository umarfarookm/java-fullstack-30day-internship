function WeatherCard({ city, temp, humidity, wind, condition, icon, isFavorite, onToggleFavorite }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-4 transition hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{city}</h2>
          <p className="text-gray-500 dark:text-gray-400">{condition}</p>
        </div>
        <div className="text-5xl">{icon}</div>
      </div>
      <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mt-3">{temp}°C</p>
      <div className="flex gap-6 mt-4 text-sm text-gray-600 dark:text-gray-300">
        <span>💧 Humidity: {humidity}%</span>
        <span>💨 Wind: {wind} km/h</span>
      </div>
      <button onClick={onToggleFavorite} className="mt-4 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400">
        {isFavorite ? '★ Remove from Favorites' : '☆ Add to Favorites'}
      </button>
    </div>
  )
}

export default WeatherCard
