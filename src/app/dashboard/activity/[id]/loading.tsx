export default function ActivityDetailLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117] animate-pulse">
      {/* Top nav */}
      <header className="border-b border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#161b22]">
        <div className="max-w-screen-xl mx-auto px-4 h-12 flex items-center justify-between">
          <div className="h-4 w-28 bg-gray-200 dark:bg-[#30363d] rounded" />
          <div className="h-4 w-16 bg-gray-200 dark:bg-[#30363d] rounded" />
        </div>
      </header>

      <div className="max-w-screen-lg mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="h-3 w-48 bg-gray-200 dark:bg-[#30363d] rounded mb-6" />

        {/* Hero */}
        <div className="mb-6">
          <div className="h-8 w-72 bg-gray-200 dark:bg-[#30363d] rounded mb-2" />
          <div className="h-4 w-32 bg-gray-200 dark:bg-[#30363d] rounded" />
        </div>

        {/* Stats grid */}
        <div className="flex flex-wrap gap-3 mb-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-4 py-3 bg-gray-50 dark:bg-[#161b22] border border-gray-200 dark:border-[#30363d] rounded-lg min-w-[80px]"
            >
              <div className="h-3 w-14 bg-gray-200 dark:bg-[#30363d] rounded mb-2" />
              <div className="h-6 w-12 bg-gray-200 dark:bg-[#30363d] rounded" />
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="mb-6 h-96 bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-[#30363d] rounded-lg" />

        {/* Splits skeleton */}
        <div className="mt-6">
          <div className="h-4 w-16 bg-gray-200 dark:bg-[#30363d] rounded mb-3" />
          <div className="h-40 bg-gray-50 dark:bg-[#161b22] border border-gray-200 dark:border-[#30363d] rounded-lg" />
        </div>
      </div>
    </div>
  )
}
