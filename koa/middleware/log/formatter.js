const formatError = (ctx, err, costTime) => {
  let method = ctx.method
  let url = ctx.url
  let body = ctx.request.body
  let userAgent = ctx.header.userAgent
  return { method, url, body, costTime, err, userAgent }
}
const formatRes = (ctx, costTime) => {
  let method = ctx.method
  let url = ctx.url
  let body = ctx.request.body
  let response = ctx.response
  let userAgent = ctx.header.userAgent
  return { method, url, body, costTime, response, userAgent }
}
module.exports = { formatError, formatRes }
