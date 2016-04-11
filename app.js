import Koa from 'koa';
import views from 'co-views';
import serve from 'koa-static';
import convert from 'koa-convert';

const app = new Koa();
const render = views(__dirname + '/views', { ext: 'jade' });

app.use(convert(serve(__dirname + '/public')));
app.use(async (ctx) => {
  const page = await render('index', {});
  ctx.body = page;
})

app.listen(7999, () => console.log('server started 7999'))

export default app;