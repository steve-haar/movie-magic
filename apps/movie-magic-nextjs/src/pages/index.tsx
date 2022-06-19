import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Header, MovieList } from '../components';
import { Movie } from '../models';

interface HomePageProps {
  movies: Array<Movie>;
}

const HomePage: NextPage<HomePageProps> = ({ movies }: HomePageProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>Movie Magic | Next.js</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
};

export async function getServerSideProps() {
  const API_URL = process.env.API_URL;
  const resMovies = await fetch(`${API_URL}/top-10-movies`);
  const movies = await resMovies.json();

  return {
    props: {
      movies,
    },
  };
}

export default HomePage;
