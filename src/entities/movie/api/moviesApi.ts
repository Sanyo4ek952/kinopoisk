import { baseApi } from "@/shared/api/baseApi";
import { MoviesResponse } from "../model/types";
import { DiscoverMovieParams } from "@/entities/movie/model/moviesQuerySchema";

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, DiscoverMovieParams | void>({
      query: (params) => ({
        url: "/movies",
        ...(params ? { params } : {}),
      }),
      providesTags: ["Movies"],
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
