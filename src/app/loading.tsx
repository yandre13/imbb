export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      {/* Spinner */}
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900 dark:border-red-500"></div>
    </div>
  )
}
