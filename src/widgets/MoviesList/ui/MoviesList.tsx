"use client";
import React from "react";

import { cn } from "@/shared/lib";
import { MovieCard, MovieCardSkeleton } from "@/entities/movie/ui";
import { useGetMoviesQuery } from "@/entities/movie/api/moviesApi";
import { EmptyState, ErrorState } from "@/shared/ui";

const SKELETON_COUNT = 8;

export const MoviesList = () => {
  let content: React.ReactNode;
  const { data, isLoading, isError, refetch } = useGetMoviesQuery();
  if (isLoading)
    content = Array.from({ length: SKELETON_COUNT }).map((_, i) => (
      <MovieCardSkeleton key={i} />
    ));
  else if (isError || !data)
    content = (
      <ErrorState
        title={"Error"}
        description={"Данные не подгрузились. Попробуйте снова"}
        onRetry={refetch}
      />
    );
  else if (!data.results.length)
    content = (
      <EmptyState
        title="Фильмы не найдены"
        description="Попробуйте изменить фильтры"
      />
    );
  else
    content = data.results.map((movie, index) => (
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
