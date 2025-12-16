"use client";
import React from "react";

import { cn } from "@/shared/lib";
import { MovieCard, MovieCardSkeleton } from "@/entities/movie/ui";
import { useGetMoviesQuery } from "@/entities/movie/api/moviesApi";
import { EmptyState, ErrorState } from "@/shared/ui";

const SKELETON_COUNT = 8;

export const MoviesList = () => {
  const {
    data: response,
    isLoading,
    isError,
    refetch,
  } = useGetMoviesQuery({
    type: "now_playing",
    page: 1,
  });
  let content: React.ReactNode;

  if (isLoading)
    content = Array.from({ length: SKELETON_COUNT }).map((_, i) => (
      <MovieCardSkeleton key={i} />
    ));
  else if (isError || !response)
    content = (
      <ErrorState
        title={"Error"}
        description={"Данные не подгрузились. Попробуйте снова"}
        onRetry={refetch}
      />
    );
  else if (!response.results.length)
    content = (
      <EmptyState
        title="Фильмы не найдены"
        description="Попробуйте изменить фильтры"
      />
    );
  else
    content = response.results.map((movie, index) => (
      <MovieCard key={movie.id} isPriorityImageLoading={index < 2} {...movie} />
    ));
  return (
    <div
      className={cn(
        "grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]",
      )}
    >
      {content}
    </div>
  );
};
