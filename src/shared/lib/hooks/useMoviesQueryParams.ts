import { useSearchParams } from "next/navigation";
import type { DiscoverMovieParams } from "@/entities/movie/model/moviesQuerySchema";

export function useMoviesQueryParams(): DiscoverMovieParams {
  const searchParams = useSearchParams() ?? new URLSearchParams();

  return {
    page: searchParams.get("page")
      ? Number(searchParams.get("page"))
      : undefined,

    include_adult:
      searchParams.get("include_adult") === "true"
        ? true
        : searchParams.get("include_adult") === "false" && false,
    include_video:
      searchParams.get("include_video") === "true"
        ? true
        : searchParams.get("include_video") === "false" && false,
  };
}
