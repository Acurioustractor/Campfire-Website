export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-earth-50">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-full mb-6 animate-pulse">
          <span className="text-white font-bold text-5xl">C</span>
        </div>
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    </div>
  )
}
