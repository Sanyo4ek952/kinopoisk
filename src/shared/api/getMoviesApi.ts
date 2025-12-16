import { baseApi } from "@/shared/api/baseApi";

export const moviesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<any, { type?: string; page?: number }>({
      query: ({ type = "popular", page = 1 } = {}) => ({
        url: "movies",
        params: { type, page },
      }),
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
