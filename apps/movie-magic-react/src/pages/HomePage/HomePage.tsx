import { MovieListContainer } from './MovieListContainer';
import { Header } from '@/components/Header';
import * as React from 'react';

export function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <div className="p-3">
        <div className="card p-3">
          <MovieListContainer />
        </div>
      </div>
    </React.Fragment>
  );
}
