import axios from "axios";

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

// export async function getForecast(city: string) {
//   try {
//     const { data } = await axios.get(`${process.env.WEATHERAPI_KEY}`, {
//       params: {
//         q: city,
//         days: 3,
//         aqi: "yes",
//         alert: "yes",
//       },
//     });

//     return console.log(data);
//   } catch (err) {
//     console.error(`Error: ${err}`);
//     alert("Ingresa una ciudad");
//     return;
//   }
// }
