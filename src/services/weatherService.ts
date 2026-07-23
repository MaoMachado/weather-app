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
}

const weatherApi = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  params: {
    key: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
    lang: "es",
  },
});

export const getCurrentWeather = async (city: string) => {
  const response = await weatherApi.get("/current.json", {
    params: { q: city },
  });
  return response.data;
};

export const getForecast = async (city: string) => {
  const response = await weatherApi.get("/forecast.json", {
    params: { q: city, days: 3 },
  });
  return response.data;
};
