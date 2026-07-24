import axios from "axios";

export interface WeatherResponse {
  location: {
    name: string;
  };

  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };

  forecast: {
    forecastday: ForecastDay[];
  };
}

export interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avghumidity: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

const weatherApi = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  params: {
    key: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
    lang: "es",
  },
});

export const getWeatherData = async (city: string) => {
  const response = await weatherApi.get("/forecast.json", {
    params: { q: city, days: 5 },
  });

  return response.data;
};
