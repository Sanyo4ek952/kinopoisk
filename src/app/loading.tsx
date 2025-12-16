import { MovieCardSkeleton } from "@/entities/movie/ui";

export default function Loading() {
  return (
    <>
      <div className="h-5 bg-gray-700 rounded w-1/4 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <MovieCardSkeleton />
        <MovieCardSkeleton />
        <MovieCardSkeleton />
        <MovieCardSkeleton />
        <MovieCardSkeleton />
        <MovieCardSkeleton />
      </div>
    </>
  );
}
