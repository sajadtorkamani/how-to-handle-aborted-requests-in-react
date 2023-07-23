import { rest } from 'msw'

export const handlers = [
  rest.get('/books', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(['War and Peace', 'Frankenstein', 'Stoner']),
    )
  }),

  rest.post('/api/posts', (_req, res, ctx) => {
    return res(
      ctx.delay(10000),
      ctx.status(201),
      ctx.json(['War and Peace', 'Frankenstein', 'Stoner']),
    )
  }),
]
