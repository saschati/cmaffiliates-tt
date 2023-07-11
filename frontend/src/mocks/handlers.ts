import { rest } from 'msw';

export const handlers = [
  rest.get('/countries', (req, res, ctx) => {
    return res(ctx.json({ time: new Date(target).toUTCString() }), ctx.delay(400));
  }),
  
  rest.get('/countries/:id/cities', (req, res, ctx) => {
    const { offset } = req.params as { offset: string };
    const date = new Date();
    const localDate = date.getTime(); // users local time
    const localOffset = date.getTimezoneOffset() * 60000;
    const formattedOffset = Number(offset.replace(':', '.'));
    const target = localDate + localOffset + 3600000 * formattedOffset;
    return res(ctx.json({ time: new Date(target).toUTCString() }), ctx.delay(400));
  }),
];
