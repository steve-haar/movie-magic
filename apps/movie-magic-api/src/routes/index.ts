import { Router } from 'express';
import { moviesRouter } from './moviesRouter';

export const rootRouter = Router();
rootRouter.use('/top-10-movies', moviesRouter);
