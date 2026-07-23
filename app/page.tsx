"use client";
import { useState } from "react";
import { getCurrentWeather } from "../services/weatherService";

export default function Home() {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    if (!city.trim()) {
      setError("Por favor ingresa el nombre de una ciudad.");
      setTimeout(() => {
        setError(null);
      }, 3500);
      setLoading(false);
      return;
    }

    try {
      const data = await getCurrentWeather(city);
      setWeatherData(data);
    } catch (err) {
      console.error("Error al cargar datos: ", err);
      setError("No se encontró la cuidad");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen grid place-content-center">
      <article className="border text-center p-3 border-gray-800 rounded-lg">
        <h1 className="mb-3 text-xl tracking-wider">App Del Clima</h1>
        <section className="flex items-center gap-3">
          <input
            aria-label="Buscar Ciudad"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-600 p-1 rounded-md"
            placeholder="Ingresa la ciudad"
          />
          <button
            aria-label="Buscar Ciudad"
            onClick={handleSearch}
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
              <span className="bg-gray-500 ml-3 px-2 py-0.5 rounded animate-pulse">
                {weatherData?.current.temp_c} °C
              </span>
            </p>

            <p className="text-lg tracking-wider flex flex-col items-center">
              Pronostico:
              <span className="inline-flex items-center gap-1 bg-blue-500/50 px-3 rounded animate-pulse">
                {weatherData?.current.condition.text}{" "}
                <img
                  src={weatherData?.current.condition.icon}
                  alt={weatherData?.current.condition.text}
                  width={30}
                  height={30}
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
