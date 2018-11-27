const Koa = require('koa')
const app = new Koa()

const { errLogger, resLogger } = require('./middleware/log')

const { port } = require('./config')

// log
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  resLogger(ctx, ms)
})
app.on('error', (err, ctx) => {
  errLogger(ctx, err)
  console.error('server error', err, ctx)
})

app.use(async ctx => {
  ctx.body = 'Hello World'
})

app.listen(port, () => console.log(`http://localhost:${port}/ `))
