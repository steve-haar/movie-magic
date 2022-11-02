import express from 'express';
import movies from './data/top-10-movies.json';

export const moviesRouter = express.Router();

/** get top 10 movies */
moviesRouter.get('/', (_, res) => {
  res.send(movies);
});

/** get movie with specified id */
moviesRouter.get('/:id', (req, res) => {
  const movie = movies.find((movie) => movie.id === req.params.id);
  if (movie) {
    res.send(movie);
  } else {
    res.status(404).end();
  }
});
