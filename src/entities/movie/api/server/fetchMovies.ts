import { moviesQuerySchema } from "@/entities/movie/model/moviesQuerySchema";
import { MoviesResponse } from "@/entities/movie/model/types";

const endpointMap = {
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  now_playing: "/movie/now_playing",
} as const;

type Params = { type: keyof typeof endpointMap; page: number };

export async function fetchMovies(rawParams: Params): Promise<MoviesResponse> {
  const parsed = moviesQuerySchema.safeParse({
    type: rawParams.type,
    page: rawParams.page,
  });
  if (!parsed.success) {
    throw new Error("Invalid params");
  }

  const { type, page } = parsed.data;
  const endpoint = endpointMap[type];

  const url = `${process.env.BASE_URL}${endpoint}?page=${page}&language=en-US&region=RU`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_ACCESS_KEY}`,
      accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`TMDB request failed: ${res.status} ${res.statusText}`);
  }

  const data = (await res.json()) as MoviesResponse;

  if (!Array.isArray(data.results)) {
    throw new Error("Invalid TMDB response structure");
  }

  return data;
}
