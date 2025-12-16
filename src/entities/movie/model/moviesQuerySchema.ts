// moviesQuerySchema.ts
import { z } from "zod";

export const moviesQuerySchema = z.object({
  type: z.preprocess(
    (v) => v ?? "now_playing",
    z.enum(["now_playing", "popular", "top_rated"]),
  ),
  page: z.preprocess((v) => Number(v ?? 1), z.number().int().positive()),
});
