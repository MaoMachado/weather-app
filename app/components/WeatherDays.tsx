import { ForecastDay } from "@/src/services/weatherService";
import { formatDate } from "@/src/utils/dateUtils";

export default function WeatherDays({ day }: { day: ForecastDay }) {
  return (
    <section
      key={day.date}
      className="bg-blue-600/20 p-3 rounded-xl mb-2 lg:bg-black/10 animate-fade-in"
    >
      <h2 className="text-xl text-center mb-3 lg:text-2xl lg:tracking-wider">
        {day.day.condition.text}
      </h2>

      <main className="flex justify-between lg:justify-center px-3 gap-3">
        <figure className="place-content-center px-3 rounded-xl panel-header">
          <img
            src={`https:${day.day.condition.icon}`}
            alt={day.day.condition.text}
            className="w-10 h-10 mx-auto mb-1 lg:w-14 lg:h-14"
          />
          <figcaption className="text-sm tracking-wider lg:text-lg">
            {formatDate(day.date)}
          </figcaption>
        </figure>

        <article className="flex flex-col gap-1 text-center">
          <p className="bg-black/50 px-3 py-0.5 rounded-full">
            Max: {day.day.maxtemp_c} °C
          </p>
          <p className="bg-black/50 px-3 py-0.5 rounded-full">
            Min: {day.day.mintemp_c} °C
          </p>
          <p className="bg-black/50 px-3 py-0.5 rounded-full">
            Hum: {day.day.avghumidity} %
          </p>
        </article>
      </main>
    </section>
  );
}
