import { WeatherResponse } from "@/src/services/weatherService";

export default function WeatherData({
  weatherData,
}: {
  weatherData: WeatherResponse;
}) {
  return (
    <section className="animate-fade-in lg:w-1/2">
      <h2 className="tracking-wider text-center text-3xl py-3">
        Ciudad
        <span className="text-blue-500 font-semibold">
          📍{weatherData?.location.name}
        </span>
      </h2>

      <article className="grid grid-cols-2 gap-2 mt-2">
        <p className="bg-cyan-700/40 text-center py-2 rounded-xl text-sm lg:text-lg">
          Temperatura:
          <span className="block text-lg font-semibold text-red-300 lg:text-2xl">
            {weatherData?.current.temp_c} °C
          </span>
        </p>
        <p className="bg-cyan-700/40 text-center py-2 rounded-xl text-sm lg:text-lg">
          Temperatura:
          <span className="block text-lg font-semibold text-red-300 lg:text-2xl">
            {weatherData?.current.temp_c} °C
          </span>
        </p>
        <p className="bg-cyan-700/40 text-center py-2 rounded-xl text-sm lg:text-lg">
          Humedad:
          <span className="block text-lg font-semibold text-red-300 lg:text-2xl">
            {weatherData?.current.humidity}%
          </span>
        </p>
        <p className="bg-cyan-700/40 text-center py-2 rounded-xl text-sm lg:text-lg">
          Viento:
          <span className="block text-lg font-semibold text-red-200 lg:text-2xl">
            {weatherData?.current.wind_kph} km/h
          </span>
        </p>
        <p className="bg-cyan-800/40 py-3 rounded-xl text-xl text-center col-span-2">
          Pronostico:
          <img
            src={`https:${weatherData?.current.condition.icon}`}
            alt={weatherData?.current.condition.text}
            className="w-10 h-10 mx-auto"
          />
          <span className="block text-lg">
            {weatherData?.current.condition.text.toLocaleUpperCase()}
          </span>
        </p>
      </article>
    </section>
  );
}
