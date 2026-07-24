"use client";

import { useWeather } from "@/src/hooks/useWeather";

export default function Home() {
  const {
    city,
    setCity,
    weatherData,
    weatherDays,
    loading,
    error,
    searchWeather,
    formatDate,
  } = useWeather();

  return (
    <main className="min-h-screen container mx-auto">
      <div className="lg:p-3">
        <header className="lg:w-fit mx-auto text-center p-3 bg-slate-800 lg:rounded-lg lg:shadow shadow-gray-500/20">
          <h1 className="mb-3 text-xl tracking-wider lg:text-2xl">
            App Del Clima
          </h1>
          <section className="flex items-center justify-center gap-3">
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
        </header>

        <section className="p-1 lg:flex lg:flex-col lg:items-center lg:gap-2 lg:mt-3">
          {weatherData && (
            <>
              <article>
                <h2 className="text-lg tracking-wider text-center lg:text-2xl">
                  Ciudad:
                  <span className="text-blue-500 font-semibold">
                    📍 {weatherData?.location.name}
                  </span>
                </h2>

                <section className="bg-blue-500/40 p-2 rounded-md mt-2 flex justify-center gap-3 text-center lg:w-fit lg:mx-auto">
                  <p className="bg-black/40 px-1 place-content-center rounded text-sm">
                    Temperatura:
                    <span className="block text-lg font-semibold text-red-200">
                      {weatherData?.current.temp_c} °C
                    </span>
                  </p>

                  <p className="bg-black/40 p-2 place-content-center rounded text-sm">
                    Pronostico:
                    <img
                      src={`https:${weatherData?.current.condition.icon}`}
                      alt={weatherData?.current.condition.text}
                      className="w-10 h-10 mx-auto"
                    />
                  </p>

                  <p className="bg-black/40 px-1 place-content-center rounded text-sm">
                    Humedad:
                    <span className="block text-lg font-semibold text-red-200">
                      {weatherData?.current.humidity}%
                    </span>
                  </p>

                  <p className="bg-black/40 px-1 place-content-center rounded text-sm">
                    Viento:
                    <span className="block text-lg font-semibold text-red-200">
                      {weatherData?.current.wind_kph} km/h
                    </span>
                  </p>
                </section>
              </article>

              <article className="bg-blue-500/50 p-2 mt-2 rounded-md lg:w-1/2">
                {weatherDays.map((day) => (
                  <section
                    key={day.date}
                    className="bg-black/40 p-2 rounded-md mt-2"
                  >
                    <h2 className="text-lg text-center mb-3 lg:text-xl lg:tracking-wider">
                      {day.day.condition.text}
                    </h2>

                    <div className="flex justify-between px-3 gap-3">
                      <figure className="place-content-center">
                        <img
                          src={`https:${day.day.condition.icon}`}
                          alt={day.day.condition.text}
                          className="w-10 h-10 mx-auto mb-1 lg:w-14 lg:h-14"
                        />
                        <figcaption className="text-sm tracking-wider lg:text-lg">
                          {formatDate(day.date)}
                        </figcaption>
                      </figure>

                      <div className="flex flex-col gap-1">
                        <p className="bg-black/50 px-3 py-0.5 rounded-full">
                          Max: {day.day.maxtemp_c} °C
                        </p>
                        <p className="bg-black/50 px-3 py-0.5 rounded-full">
                          Min: {day.day.mintemp_c} °C
                        </p>
                        <p className="bg-black/50 px-3 py-0.5 rounded-full">
                          Hum: {day.day.avghumidity} %
                        </p>
                      </div>
                    </div>
                  </section>
                ))}
              </article>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
