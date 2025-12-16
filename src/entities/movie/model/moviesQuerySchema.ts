import { z } from "zod";

export const discoverMovieSchema = z.object({
  page: z.coerce.number().int().min(1).max(500).optional(),
  include_adult: z.coerce.boolean().default(false),
  include_video: z.coerce.boolean().default(false),
});

export type DiscoverMovieParams = z.infer<typeof discoverMovieSchema>;
