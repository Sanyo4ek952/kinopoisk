import React from "react";

import { cn } from "@/shared/lib";
import { fetchMovies } from "@/entities/MovieCard/api/server/fetchMovies";
import { MovieCard } from "@/entities/MovieCard/ui";

export const MoviesList = async () => {
  const response = await fetchMovies({
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
