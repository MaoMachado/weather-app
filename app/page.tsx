"use client";

import { useWeather } from "@/src/hooks/useWeather";
import WeatherData from "./components/WeatherData";
import WeatherDataSkeleton from "./components/WeatherDataSkeleton";
import WeatherDays from "./components/WeatherDays";
import WeatherDaysSkeleton from "./components/WeatherDaysSkeleton";
import ThemeToggle from "@/app/components/theme-toggle";

export default function Home() {
  const {
    city,
    setCity,
    weatherData,
    weatherDays,
    loading,
    error,
    searchWeather,
    history,
  } = useWeather();

  return (
    <main className="min-h-screen container mx-auto">
      <div className="p-1">
        <header className="panel-header animate-fade-in text-center p-1 rounded-xl">
          <h1 className="mb-3 tracking-wider text-2xl font-bold">
            App Del Clima <ThemeToggle />
          </h1>

          <section className="flex items-center justify-center gap-3 relative">
            <label htmlFor="city-input" className="sr-only">
              Ciudad
            </label>
            <input
              id="city-input"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border border-gray-600 px-2 py-1 rounded-xl"
              placeholder="Ingresa la ciudad"
            />
            <button
              aria-label="Buscar Ciudad"
              onClick={() => searchWeather()}
              disabled={loading}
              className="bg-blue-500 text-white px-4 py-1 rounded-md cursor-pointer disabled:bg-gray-400"
            >
              {loading ? "Buscando..." : "Buscar"}
            </button>
          </section>

          <div className="flex flex-wrap mt-3 gap-1 lg:justify-center">
            {history.map((h) => (
              <button
                type="button"
                key={h}
                disabled={loading}
                onClick={() => {
                  searchWeather(h);
                }}
                className="bg-blue-500/30 px-2 py-1 rounded-full text-xs tracking-wider font-semibold cursor-pointer border dark:border-gray-200/20"
              >
                {h.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="mt-2">
            {error && <p className="text-red-500">{error}</p>}
          </div>

          <div className="absolute -z-10 top-0 left-10 blur-lg w-5 h-full bg-blue-800/30 rounded-full" />
          <div className="absolute -z-10 bottom-0 right-10 blur-lg w-5 h-full bg-cyan-800/20 rounded-full" />
        </header>

        <section className="p-1 lg:flex lg:flex-col lg:items-center lg:gap-2 lg:mt-3">
          {loading ? (
            <>
              <WeatherDataSkeleton />
              <WeatherDaysSkeleton />
            </>
          ) : (
            weatherData && (
              <>
                <WeatherData weatherData={weatherData} />

                <article className="mt-2 rounded-md lg:w-1/2">
                  {weatherDays.map((day) => (
                    <WeatherDays key={day.date} day={day} />
                  ))}
                </article>
              </>
            )
          )}
        </section>
      </div>
    </main>
  );
}
