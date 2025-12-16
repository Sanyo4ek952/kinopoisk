import { baseApi } from "@/shared/api/baseApi";
import { MoviesResponse } from "../model/types";

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, { type?: string; page?: number }>({
      query: (params) => ({
        url: "/movies",
        params,
      }),
      providesTags: ["Movies"],
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
