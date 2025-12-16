import z from "zod";

export const moviesQuerySchema = z.object({
  type: z
    .enum(["popular", "top_rated", "upcoming", "now_playing"])
    .default("popular"),
  page: z
    .string()
    .transform((v) => Number(v))
    .pipe(z.number().int().positive())
    .default(1),
});
