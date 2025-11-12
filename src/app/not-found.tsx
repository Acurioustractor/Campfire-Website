export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-earth-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-full mb-6">
            <span className="text-white font-bold text-5xl">?</span>
          </div>
        </div>
        <h1 className="font-display font-bold text-4xl md:text-5xl text-earth-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. The page may have moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/" className="btn-primary">
            Go Home
          </a>
          <a href="/stories" className="btn-outline">
            View Stories
          </a>
        </div>
      </div>
    </div>
  )
}
