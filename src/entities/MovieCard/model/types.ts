export type Movies = {
  poster_path: string | null;
  id: number;
  title: string;
  release_date: string;
  overview: string;
};
export type MoviesResponse = {
  dates: Record<string, number>;
  page: number;
  results: Movies[];
  total_pages: number;
  total_results: number;
};
