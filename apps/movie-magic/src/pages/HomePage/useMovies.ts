import * as React from 'react';
import { Movie } from '../../models';

/**
 * Hook to fetch movies
 */
export function useMovies() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const failMessage = 'Failed to get movies';

  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [error, setError] = React.useState<Error>();
  const [movies, setMovies] = React.useState<Array<Movie>>([]);

  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}/top-10-movies`);

        if (!response.ok) {
          setIsError(true);
          setError(new Error(`${failMessage} (${response.status})`));
          setIsLoading(false);
          return;
        }

        const movies = await response.json();
        setMovies(movies);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error instanceof Error ? error : new Error(failMessage));
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [apiUrl]);
  return { isLoading, isError, error, movies };
}
