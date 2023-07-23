// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  // Handles a GET /user request
  rest.get('/books', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(['War and Peace', 'Frankenstein', 'Stoner']),
    )
  }),
  rest.get('/books-error', (_req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json(['War and Peace', 'Frankenstein', 'Stoner']),
    )
  }),
]
