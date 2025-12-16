export type Movies = {
  poster_path: string | null;
  id: number;
  title: string;
  release_date: string;
  overview: string;
};
export interface MoviesDates {
  minimum: string;
  maximum: string;
}
export type MoviesResponse = {
  dates: MoviesDates;
  page: number;
  results: Movies[];
  total_pages: number;
  total_results: number;
};
