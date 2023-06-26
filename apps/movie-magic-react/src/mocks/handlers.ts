import { MOCK_API_URL } from './constants';
import { mockMovies } from './mockMovies';
import { rest } from 'msw';

export const handlers = [
  rest.get(`${MOCK_API_URL}/top-10-movies`, async (req, res, ctx) =>
    res(ctx.status(200), ctx.json(mockMovies))
  ),
];
