import { rest } from 'msw'

export const handlers = [
  rest.get('/books', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(['War and Peace', 'Frankenstein', 'Stoner']),
    )
  }),

  rest.post('/api/notes', (_req, res, ctx) => {
    return res(
      ctx.delay(10000),
      ctx.status(500),
      ctx.json(['War and Peace', 'Frankenstein', 'Stoner']),
    )
  }),
]
