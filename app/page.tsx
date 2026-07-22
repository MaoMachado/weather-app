"use client";
import { useState } from "react";
import { getCurrentWeather } from "./services/weatherServices";

export default function Home() {
  const [find, setFind] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>(null);

  const handleSearch = async () => {
    await getCurrentWeather(find);
  };

  return (
    <main className="min-h-screen grid place-content-center">
      <article className="border text-center p-3 border-gray-800 rounded-lg">
        <h1 className="mb-3 text-xl tracking-wider">App Del Clima</h1>
        <section className="flex items-center gap-3">
          <input
            type="text"
            id="find"
            value={find}
            onChange={(e) => setFind(e.target.value)}
            className="border border-gray-600 p-1 rounded-md"
            placeholder="Ingresa la ciudad"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-1 rounded-md cursor-pointer"
          >
            Buscar
          </button>
        </section>
      </article>
      <article className="border text-center p-3 border-gray-800 rounded-lg mt-3">
        <h2 className="text-2xl font-semibold my-3">
          Ciudad:
          <span className="bg-gray-600 ml-3 px-2 py-0.5 rounded"></span>
        </h2>

        <h3 className="text-lg tracking-wider flex justify-between mb-3">
          Temperatura:
          <span className="bg-gray-600 ml-3 px-2 py-0.5 rounded"></span>
        </h3>
        <h3 className="text-lg tracking-wider flex justify-between">
          Pronostico:
          <span className="bg-gray-600 ml-3 px-2 py-0.5 rounded"></span>
        </h3>
      </article>
    </main>
  );
}
