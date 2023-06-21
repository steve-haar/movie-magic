import * as React from 'react';
import { Header } from '@/components/Header';
import { MovieList } from '@/components/MovieList';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="p-3">
        <div className="card p-3">
          <h1 className="text-2xl font-semibold mb-2">
            Top 10 Movies Of All Time
          </h1>
          <MovieList />
        </div>
      </div>
    </React.Fragment>
  );
}
