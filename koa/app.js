const Koa = require('koa')
const app = new Koa()
// const json = require('koa-json')

const bodyParser = require('koa-bodyparser')
const router = require('./router')
const { errLogger, resLogger } = require('./middleware/log')
const response = require('./middleware/response')

const { port } = require('./config')

app.use(bodyParser())

// 返回美化了的json数据
// app.use(json())

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

// 引入路由分发
app.use(router.routes()).use(router.allowedMethods())
// response
app.use(response)
app.listen(port, () => console.log(`http://localhost:${port}/ `))
