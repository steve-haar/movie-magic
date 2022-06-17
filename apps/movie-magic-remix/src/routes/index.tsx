import * as React from 'react';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Header, MovieList } from '~/components';
import type { Movie } from '~/models';

type HomePageData = {
  movies: Array<Movie>;
};

export let loader: LoaderFunction = async () => {
  const API_URL = process.env.API_URL;
  const resMovies = await fetch(`${API_URL}/top-10-movies`);
  const movies = await resMovies.json();

  let data: HomePageData = {
    movies,
  };

  return json(data);
};

export default function HomePage() {
  const { movies } = useLoaderData<HomePageData>();

  return (
    <React.Fragment>
      <Header />
      <div className="p-3">
        <div className="card p-3">
          <h1 className="text-2xl font-semibold mb-2">
            Top 10 Movies Of All Time
          </h1>
          <MovieList movies={movies} />
        </div>
      </div>
    </React.Fragment>
  );
}
