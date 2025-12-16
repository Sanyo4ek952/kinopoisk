// app/api/movies/route.ts
import { fetchMovies } from "@/entities/MovieCard/api/server/fetchMovies";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const data = await fetchMovies({
    type: searchParams.get("type"),
    page: searchParams.get("page"),
  });

  return Response.json(data);
}
