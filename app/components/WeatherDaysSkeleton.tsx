export default function WeatherDaysSkeleton() {
  return (
    <section>
      {Array.from({ length: 5 }, (_, i) => (
        <article
          key={i}
          className="flex flex-col bg-blue-500/30 p-2 rounded-md mb-2 lg:bg-black/10"
        >
          <div className="mb-3 w-full h-8 bg-gray-800/70 animate-pulse rounded-full" />

          <main className="flex justify-between lg:justify-center px-3 gap-3">
            <div className="place-content-center bg-gray-800/70 h-12 p-1 rounded-md animate-pulse" />

            <div className="flex flex-col gap-1">
              <p className="bg-gray-800/70 px-3 py-0.5 rounded-full animate-pulse" />
              <p className="bg-gray-800/70 px-3 py-0.5 rounded-full animate-pulse" />
              <p className="bg-gray-800/70 px-3 py-0.5 rounded-full animate-pulse" />
            </div>
          </main>
        </article>
      ))}
    </section>
  );
}
