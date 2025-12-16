export function MovieCardSkeleton() {
  return (
    <div className="animate-pulse rounded-lg space-y-3 w-full">
      <div className="aspect-[2/3] bg-gray-700 rounded" />
      <div className="h-5 bg-gray-700 rounded w-3/4" />
      <div className="h-16 bg-gray-700 rounded w-full" />
    </div>
  );
}
