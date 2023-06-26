import type { Movie } from '@/models';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function fetchMovies(): Promise<Movie[]> {
  const apiUrl = import.meta.env.VITE_API_URL;
  const resMovies = await axios.get(`${apiUrl}/top-10-movies`);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return resMovies.data;
}

export function useMovies() {
  return useQuery(['movies'], fetchMovies);
}
