import React from "react";
import { fetchMovies } from "@/shared/services/movies.service";
import { MoviesResponse } from "@/shared/api/types";
import { MovieCard } from "@/entities";
import { cn } from "@/shared/lib/utils";

export const MoviesList = async (className?: string) => {
  const response: MoviesResponse = await fetchMovies({
    type: "now_playing",
    page: "1",
  });
  if (!response) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
    >
      {response.results.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};
