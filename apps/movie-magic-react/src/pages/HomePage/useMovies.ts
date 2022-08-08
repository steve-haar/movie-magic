import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Movie } from '../../models';

const apiUrl = import.meta.env.VITE_API_URL;

function fetchMovies(): Promise<Movie[]> {
  return axios.get(`${apiUrl}/top-10-movies`).then((response) => response.data);
}

export function useMovies() {
  return useQuery(['movies'], fetchMovies);
}
