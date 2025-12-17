import { fetchMovies } from "@/entities/movie/api/server/fetchMovies";
import { discoverMovieSchema } from "@/entities/movie/model/moviesQuerySchema";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = Object.fromEntries(req.nextUrl.searchParams);
    const params = discoverMovieSchema.parse(searchParams);
    const data = await fetchMovies(params);
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Failed to load movies" }, { status: 400 });
  }
}
