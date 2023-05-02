'use client';

import { Button } from '@movie-magic/ui-lib';
import type { Movie } from '@/models';

async function getMovies() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  console.log('----> API_URL', API_URL);
  const resMovies = await fetch(`${API_URL}/top-10-movies`);
  // returns a promise that resolves to movies in JSON format
  return resMovies.json();
}

export async function MovieList() {
  const movies = await getMovies();

  return (
    <table data-testid="movie-table">
      <thead>
        <tr>
          <th className="text-center">Rank</th>
          <th>Name</th>
          <th className="text-center">Year</th>
          <th className="text-center">Rating</th>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie: Movie, index: number) => (
          <tr key={movie.name}>
            <td className="text-center">{index + 1}</td>
            <td>{movie.name}</td>
            <td className="text-center">{movie.year}</td>
            <td className="text-center">{movie.rating.toFixed(1)}</td>
            <td className="text-center">
              <Button>Watch</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
