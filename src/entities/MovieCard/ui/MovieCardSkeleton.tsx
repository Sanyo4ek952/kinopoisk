export function MovieCardSkeleton() {
  return (
    <div className="animate-pulse rounded-lg space-y-3 max-w-[500px]">
      <div className="h-175 bg-gray-700 rounded" />
      <div className="h-5 bg-gray-700 rounded w-3/4" />
      <div className="h-25 bg-gray-700 rounded w-full" />
    </div>
  );
}
