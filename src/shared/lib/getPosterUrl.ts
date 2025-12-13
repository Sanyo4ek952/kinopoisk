export function getPosterUrl(
  path: string | null,
  size: "w342" | "w500" | "w780" = "w500",
) {
  if (!path) return "/no-poster.png";
  return `https://image.tmdb.org/t/p/${size}${path}`;
}
