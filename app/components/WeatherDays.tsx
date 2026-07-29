import { ForecastDay } from "@/src/services/weatherService";
import { formatDate } from "@/src/utils/dateUtils";

export default function WeatherDays({ day }: { day: ForecastDay }) {
  return (
    <section
      key={day.date}
      className="flex flex-col gap-3 justify-between bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg text-center animate-fade-in"
    >
      <p className="font-semibold text-gray-900 dark:text-white lg:text-xl">
        {formatDate(day.date)}
      </p>

      <main className="flex flex-col gap-3">
        <figure className="panel-header place-content-center rounded-xl py-1">
          <img
            src={`https:${day.day.condition.icon}`}
            alt={day.day.condition.text}
            className="w-10 h-10 mx-auto mb-1 lg:w-12 lg:h-12"
          />
          <figcaption className="text-sm text-gray-500 dark:text-gray-400">
            {day.day.condition.text}
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
