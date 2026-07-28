import { WeatherResponse } from "@/src/services/weatherService";

export default function WeatherData({
  weatherData,
}: {
  weatherData: WeatherResponse;
}) {
  return (
    <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-fade-in lg:w-1/2">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="tracking-wider text-3xl font-bold text-gray-900 dark:text-white">
            📍{weatherData?.location.name}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            {weatherData?.location.country}
          </p>
        </div>

        <img
          src={`https:${weatherData?.current.condition.icon}`}
          alt={weatherData?.current.condition.text}
          className="w-16 h-16"
        />
      </header>

      <article className="grid grid-cols-2 gap-3 mt-3">
        <div className="bg-cyan-600/50 dark:bg-cyan-700/40 text-center py-2 rounded-xl">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Temperatura:
          </p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {weatherData?.current.temp_c} °C
          </p>
        </div>

        <div className="bg-cyan-600/50 dark:bg-cyan-700/40 text-center py-2 rounded-xl">
          <p className="text-sm text-gray-500 dark:text-gray-400">Condición</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {weatherData?.current.condition.text}
          </p>
        </div>

        <div className="bg-cyan-600/50 dark:bg-cyan-700/40 text-center py-2 rounded-xl">
          <p className="text-sm text-gray-500 dark:text-gray-400">Humedad</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {weatherData?.current.humidity}%
          </p>
        </div>

        <div className="bg-cyan-600/50 dark:bg-cyan-700/40 text-center py-2 rounded-xl">
          <p className="text-sm text-gray-500 dark:text-gray-400">Viento</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            {weatherData?.current.wind_kph} km/h
          </p>
        </div>
      </article>
    </section>
  );
}
