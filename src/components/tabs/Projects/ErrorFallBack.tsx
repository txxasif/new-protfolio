export function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div role="alert" className="p-4 border border-red-500 rounded bg-red-50">
      <p className="font-semibold">Something went wrong:</p>
      <pre className="text-sm mt-2 p-2 bg-red-100 rounded">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Try again
      </button>
    </div>
  );
}
