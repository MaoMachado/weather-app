import { useState } from "react";
import {
  ForecastDay,
  getWeatherData,
  WeatherResponse,
} from "../services/weatherService";

export const useWeather = () => {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const weatherDays = weatherData?.forecast.forecastday ?? [];

  const searchWeather = async () => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    if (!city.trim()) {
      setError("Por favor ingresa el nombre de una ciudad.");
      setTimeout(() => {
        setError(null);
      }, 3500);
      setLoading(false);
      return;
    }

    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      console.error("Error al cargar datos: ", err);
      setError("No se encontró la cuidad");
    } finally {
      setLoading(false);
    }
  };

  return {
    city,
    setCity,
    loading,
    error,
    searchWeather,
    weatherData,
    weatherDays,
  };
};
