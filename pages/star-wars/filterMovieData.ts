import type { MovieDetails } from './types';

export const filterMovieData = (movie: MovieDetails & Record<string, unknown>): MovieDetails => {
  const { id, title, release_date, director, producer } = movie;
  movie = { id, title, release_date, director, producer };
  return movie;
};
