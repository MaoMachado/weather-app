"use client";

import { useWeather } from "@/src/hooks/useWeather";

export default function Home() {
  const { city, setCity, weatherData, loading, error, searchWeather } =
    useWeather();

  return (
    <main className="min-h-screen grid place-content-center">
      <article className="border text-center p-3 border-gray-800 rounded-lg">
        <h1 className="mb-3 text-xl tracking-wider">App Del Clima</h1>
        <section className="flex items-center gap-3">
          <label htmlFor="city-input" className="sr-only">
            Ciudad
          </label>
          <input
            id="city-input"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-600 p-1 rounded-md"
            placeholder="Ingresa la ciudad"
          />
          <button
            aria-label="Buscar Ciudad"
            onClick={searchWeather}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-1 rounded-md cursor-pointer disabled:bg-gray-400"
          >
            {loading ? "Buscando..." : "Buscar"}
          </button>
        </section>
        <div className="mt-2">
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </article>
      {weatherData && (
        <article className="border text-center p-3 border-gray-800 rounded-lg mt-3">
          <h2 className="text-2xl font-semibold my-3">
            Ciudad:
            <span className="bg-gray-600 ml-3 px-2 py-0.5 rounded">
              {weatherData?.location.name}
            </span>
          </h2>

          <section className="flex flex-col gap-3">
            <p className="text-lg tracking-wider flex flex-col items-center">
              Temperatura:
              <span className="bg-red-500 ml-3 px-2 py-0.5 rounded animate-pulse">
                {weatherData?.current.temp_c} °C
              </span>
            </p>

            <p className="text-lg tracking-wider flex flex-col items-center">
              Pronostico:
              <span className="inline-flex items-center gap-1 bg-blue-500/50 px-3 rounded animate-pulse">
                {weatherData?.current.condition.text}{" "}
                <img
                  src={`https:${weatherData?.current.condition.icon}`}
                  alt={weatherData?.current.condition.text}
                  className="w-10 h-10"
                />
              </span>
            </p>

            <p className="text-lg tracking-wider flex flex-col items-center">
              Humedad:
              <span className="bg-cyan-500/50 ml-3 px-2 py-0.5 rounded animate-pulse">
                {weatherData?.current.humidity}%
              </span>
            </p>

            <p className="text-lg tracking-wider flex flex-col items-center">
              Viento:
              <span className="bg-sky-500/50 ml-3 px-2 py-0.5 rounded animate-pulse">
                {weatherData?.current.wind_kph} km/h
              </span>
            </p>
          </section>
        </article>
      )}
    </main>
  );
}
