import { Header } from '@/components/Header';
import { MovieList } from '@/components/MovieList';
import * as React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="p-3">
        <div className="card p-3">
          <h1 className="mb-2 text-2xl font-semibold">
            Top 10 Movies Of All Time
          </h1>
          <MovieList />
        </div>
      </div>
    </React.Fragment>
  );
}
