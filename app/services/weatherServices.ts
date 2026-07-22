import axios from "axios";

export async function getCurrentWeather(city: string) {
  try {
    const response = await axios.get(
      `${process.env.WEATHERAPI_KEY}=${city}&aqi=yes&lang=es`,
    );
    return console.log(response.data);
  } catch (err) {
    console.error(`Error: ${err}`);
    alert("Ingresa una ciudad");
    return;
  }
}

export async function getForecast(city: string) {
  try {
    const { data } = await axios.get(`${process.env.WEATHERAPI_KEY}`, {
      params: {
        q: city,
        days: 3,
        aqi: "yes",
        alert: "yes",
      },
    });

    return console.log(data);
  } catch (err) {
    console.error(`Error: ${err}`);
    alert("Ingresa una ciudad");
    return;
  }
}
