const log4js = require('log4js')
// log4js.js
const { formatError, formatRes } = require('./formatter')

const logConfig = require('../../config/log')

log4js.configure(logConfig)

let errorLogger = log4js.getLogger('error')
let responseLogger = log4js.getLogger('response')
// 封装错误日志
const errLogger = (ctx, error, resTime) => {
  if (ctx && error) {
    errorLogger.error(formatError(ctx, error, resTime))
  }
}
// 封装响应日志
const resLogger = (ctx, resTime) => {
  if (ctx) {
    responseLogger.info(formatRes(ctx, resTime))
  }
}

module.exports = {
  errLogger,
  resLogger
}
