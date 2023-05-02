import * as React from 'react';
import { MovieList } from '@/components/MovieList';
import { useMovies } from './useMovies';

export function MovieListContainer() {
  const movies = useMovies();

  if (movies.isLoading) {
    return <div>Loading...</div>;
  }

  if (movies.error) {
    return (
      <h1 className="text-2xl font-semibold mb-2">
        Error:
        {movies.error instanceof Error
          ? movies.error.message
          : 'Something went wrong'}
      </h1>
    );
  }

  if (!movies.data) {
    return <h1 className="text-2xl font-semibold mb-2">No movies found</h1>;
  }

  return (
    <React.Fragment>
      <h1 className="text-2xl font-semibold mb-2">Top 10 Movies Of All Time</h1>
      <MovieList movies={movies.data} />
    </React.Fragment>
  );
}
