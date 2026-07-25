import { useEffect, useState } from "react";
import { getWeatherData, WeatherResponse } from "../services/weatherService";
import { getSearchHistory, searchHistory } from "./useHistorySearch";

export const useWeather = () => {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    setHistory(getSearchHistory());
  }, []);

  const weatherDays = weatherData?.forecast.forecastday ?? [];

  const searchWeather = async (cityParams?: string) => {
    const targetCity = cityParams ?? city;

    setLoading(true);
    setError(null);
    setWeatherData(null);

    if (!targetCity.trim()) {
      setError("Por favor ingresa el nombre de una ciudad.");
      setTimeout(() => {
        setError(null);
      }, 3500);
      setLoading(false);
      return;
    }

    try {
      const data = await getWeatherData(targetCity);
      setWeatherData(data);
      searchHistory(targetCity);
      setHistory(getSearchHistory());
      setCity(targetCity);
    } catch (err) {
      console.error("Error al cargar datos: ", err);
      setError("No se encontró la cuidad");
    } finally {
      setLoading(false);
    }
  };

  return {
    city,
    loading,
    error,
    setCity,
    searchWeather,
    weatherData,
    weatherDays,
    history,
  };
};
