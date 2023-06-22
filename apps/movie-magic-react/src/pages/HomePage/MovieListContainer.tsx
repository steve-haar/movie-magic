import { useMovies } from './useMovies';
import { MovieList } from '@/components/MovieList';
import * as React from 'react';

export function MovieListContainer() {
  const { data, error, isLoading } = useMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error !== undefined && error !== null) {
    return (
      <h1 className="mb-2 text-2xl font-semibold">
        Error:
        {error instanceof Error ? error.message : 'Something went wrong'}
      </h1>
    );
  }

  if (!data) {
    return <h1 className="mb-2 text-2xl font-semibold">No movies found</h1>;
  }

  return (
    <React.Fragment>
      <h1 className="mb-2 text-2xl font-semibold">Top 10 Movies Of All Time</h1>
      <MovieList movies={data} />
    </React.Fragment>
  );
}
