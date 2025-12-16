import { DiscoverMovieParams } from "@/entities/movie/model/moviesQuerySchema";
import { MoviesResponse } from "@/entities/movie/model/types";
import { apiFetch } from "@/shared/api/apiClient";

export async function fetchMovies(
  params: DiscoverMovieParams,
): Promise<MoviesResponse> {
  const searchParams = new URLSearchParams(
    Object.entries(params).reduce<Record<string, string>>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    ),
  );
  const url = `/discover/movie`;
  return await apiFetch<MoviesResponse>(url, searchParams);
}
