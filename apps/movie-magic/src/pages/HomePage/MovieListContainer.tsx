import * as React from 'react';
import { MovieList } from '../../components';
import { useMovies } from './useMovies';

export function MovieListContainer() {
  const movies = useMovies();

  if (movies.isLoading) {
    return <div>Loading...</div>;
  }

  if (movies.error) {
    return (
      <h2 className="h5">
        Error:
        {movies.error instanceof Error
          ? movies.error.message
          : 'Something went wrong'}
      </h2>
    );
  }

  if (!movies.data) {
    return <h2 className="h5">No movies found</h2>;
  }

  return (
    <React.Fragment>
      <h2 className="h5 line-height-none mb-2">Top 10 Movies Of All Time</h2>
      <MovieList movies={movies.data} />
    </React.Fragment>
  );
}
