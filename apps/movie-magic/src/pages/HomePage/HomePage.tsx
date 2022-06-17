import * as React from 'react';
import { Header } from '../../components';
import { MovieListContainer } from './MovieListContainer';

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
