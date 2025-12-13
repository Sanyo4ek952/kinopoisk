import { fetchBaseQuery } from "@reduxjs/toolkit/query";
export const baseQuery = fetchBaseQuery({
  baseUrl: "/api",

  headers: {
    "API-KEY": "adda8f2b98c802a9d9e8f32e93c9c0d1",
    accept: "application/json",
  },
  prepareHeaders: (headers) => {
    headers.set("Authorization", `Bearer ${process.env.API_ACCESS_KEY}`);
    return headers;
  },
});
