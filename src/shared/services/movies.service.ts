import { moviesQuerySchema } from "@/shared/schemas/movies.schema";

const endpointMap = {
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
  now_playing: "/movie/now_playing",
} as const;

export async function fetchMovies(rawParams: {
  type: string | null;
  page: string | null;
}) {
  const parsed = moviesQuerySchema.safeParse({
    type: rawParams.type,
    page: rawParams.page,
  });
  if (!parsed.success) {
    return { error: "Invalid query params" };
  }

  const { type, page } = parsed.data;
  const endpoint = endpointMap[type];

  const url = `https://api.themoviedb.org/3${endpoint}?page=${page}&language=en-US&region=RU`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_ACCESS_KEY}`,
      accept: "application/json",
    },
    next: { revalidate: 60 },
  });

  return await res.json();
}
