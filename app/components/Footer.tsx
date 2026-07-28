export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Mario Machado
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
              App del Clima con Next.js, TypeScript y Tailwind
            </p>
          </div>

          <div className="text-center">
            Datos climáticos{" "}
            <a
              href="https://www.weatherapi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              WeatherAPI.com
            </a>
            <p className="text-xs text-gray-600 dark:text-gray-400">v1.0.0</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/MaoMachado/weather-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Ver código en GitHub"
            >
              <span className="text-sm">🐙 GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mao-machado/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Perfil de LinkedIn"
            >
              <span className="text-sm">💼 LinkedIn</span>
            </a>
            <a
              href="mailto:tuemail@machado-mario@outlook.com"
              className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Enviar correo"
            >
              <span className="text-sm">✉️ Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
