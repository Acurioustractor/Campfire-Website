'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-earth-50 px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-sunset-500 to-earth-600 rounded-full mb-6">
            <span className="text-white font-bold text-5xl">!</span>
          </div>
        </div>
        <h1 className="font-display font-bold text-4xl md:text-5xl text-earth-900 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We encountered an unexpected error. This has been logged and we'll look into it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="btn-primary"
          >
            Try Again
          </button>
          <a href="/" className="btn-outline">
            Go Home
          </a>
        </div>
        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="font-semibold text-red-900 mb-2">Error Details:</p>
            <pre className="text-sm text-red-800 overflow-x-auto">
              {error.message}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
