import { baseApi } from "@/shared/api/baseApi";
import { MoviesResponse } from "@/shared/api/types";

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, { type?: string; page?: number }>({
      query: ({ type = "popular", page = 1 } = {}) => ({
        url: "movies",
        params: { type, page },
      }),
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
