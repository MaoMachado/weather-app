import ThemeToggle from "./theme-toggle";

export default function Header({
  city,
  setCity,
  searchWeather,
  loading,
  error,
  history,
}: {
  city: string;
  setCity: (city: string) => void;
  searchWeather: (city?: string) => void;
  loading: boolean;
  error: string | null;
  history: string[];
}) {
  return (
    <header className="panel-header animate-fade-in text-center p-1 rounded-xl">
      <h1 className="mb-3 tracking-wider text-3xl font-bold text-gray-900 dark:text-white">
        🌤️ App Del Clima <ThemeToggle />
      </h1>

      <section className="flex items-center justify-center gap-3 relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ingresa la ciudad"
          className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => e.key === "Enter" && !loading && searchWeather()}
        />
        <button
          aria-label="Buscar Ciudad"
          onClick={() => searchWeather()}
          disabled={loading}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold rounded-xl transition-colors"
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </section>

      <section className="flex flex-wrap mt-3 gap-1 lg:justify-center">
        {history.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {history.map((h) => (
              <button
                key={h}
                onClick={() => searchWeather(h)}
                disabled={loading}
                className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 hover:bg-blue-500/20 dark:hover:bg-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full border border-blue-200 dark:border-blue-700/50 transition-colors disabled:opacity-50"
              >
                {h.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="mt-2">
        {error && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl border border-red-200 dark:border-red-800 w-fit mx-auto">
            {error}
          </div>
        )}
      </section>

      <div className="absolute -z-10 top-0 left-1 lg:left-50 blur-lg w-5 h-full bg-blue-800/40 rounded-full" />
      <div className="absolute -z-10 bottom-0 right-1 lg:right-50 blur-lg w-5 h-full bg-cyan-800/40 rounded-full" />
    </header>
  );
}
