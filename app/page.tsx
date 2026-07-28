"use client";

import { useWeather } from "@/src/hooks/useWeather";
import WeatherData from "./components/WeatherData";
import WeatherDataSkeleton from "./components/WeatherDataSkeleton";
import WeatherDays from "./components/WeatherDays";
import WeatherDaysSkeleton from "./components/WeatherDaysSkeleton";
import Header from "./components/Header";

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
        <Header
          city={city}
          setCity={setCity}
          searchWeather={searchWeather}
          loading={loading}
          error={error}
          history={history}
        />

        {loading ? (
          <>
            <WeatherDataSkeleton />
            <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3 p-1">
              {[...Array(5)].map((_, i) => (
                <WeatherDaysSkeleton key={i} />
              ))}
            </div>
          </>
        ) : (
          weatherData && (
            <>
              <WeatherData weatherData={weatherData} />
              {weatherDays.length > 0 && (
                <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-3">
                  {weatherDays.map((day, index) => (
                    <WeatherDays key={index} day={day} />
                  ))}
                </div>
              )}
            </>
          )
        )}
      </div>
    </main>
  );
}
