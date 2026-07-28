export default function WeatherDataSkeleton() {
  return (
    <div className="lg:w-1/2 w-full animate-pulse">
      <div className="h-10 bg-gray-600 rounded-full w-48 mx-auto mb-4" />
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="bg-gray-600 h-16 rounded-xl" />
        <div className="bg-gray-600 h-16 rounded-xl" />
        <div className="bg-gray-600 h-16 rounded-xl" />
        <div className="bg-gray-600 h-16 rounded-xl" />
        <div className="bg-gray-600 h-24 rounded-xl col-span-2" />
      </div>
    </div>
  );
}
