// app/api/movies/route.ts
import { fetchMovies } from "@/entities/movie/api/server/fetchMovies";
import { moviesQuerySchema } from "@/entities/movie/model/moviesQuerySchema";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const params = Object.fromEntries(req.nextUrl.searchParams);
    const parsed = moviesQuerySchema.parse(params);

    const data = await fetchMovies(parsed);
    return Response.json(data);
  } catch (error) {
    return Response.json({ message: "Failed to load movies" }, { status: 400 });
  }
}
