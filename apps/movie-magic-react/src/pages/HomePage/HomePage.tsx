import { MovieListContainer } from './MovieListContainer';
import { Header } from '@/components/Header';

export function HomePage() {
  return (
    <>
      <Header />
      <div className="p-3">
        <div className="card p-3">
          <MovieListContainer />
        </div>
      </div>
    </>
  );
}
