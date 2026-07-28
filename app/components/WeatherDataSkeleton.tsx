export default function WeatherDataSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mx-auto lg:w-1/2 animate-pulse">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-8 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded mt-2"></div>
        </div>
        <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <div className="h-3 w-16 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded mt-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
