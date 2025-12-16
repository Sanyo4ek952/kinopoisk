import React from "react";
import { fetchMovies } from "@/shared/services/movies.service";
import { MoviesResponse } from "@/shared/api/types";
import { MovieCard } from "@/entities/MovieCard";
import { cn } from "@/shared/lib/utils";

export const MoviesList = async () => {
  const response: MoviesResponse = await fetchMovies({
    type: "now_playing",
    page: "1",
  });
  return (
    <div
      className={cn(
        "grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]",
      )}
    >
      {response.results.map((movie, index) => (
        <MovieCard
          key={movie.id}
          isPriorityImageLoading={index < 2}
          {...movie}
        />
      ))}
    </div>
  );
};
