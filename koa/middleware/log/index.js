const log4js =require('log4js')

const log_config=require('../../config/log')

// log格式化
const {formatRes,  formatError, formatReqLog} =require('./formatter')


//加载配置文件
log4js.configure(log_config)


const errorLogger = log4js.getLogger('errorLogger');
const resLogger = log4js.getLogger('resLogger');

const logError=function (ctx,err,resTime) {
  if (ctx&&err) {
    console.log(formatError(ctx, err ,resTime))
  }
}


//封装响应日志
const logResponse = function (ctx, resTime) {
  if (ctx) {
      resLogger.info(formatRes(ctx, resTime));
  }
}

module.exports={
  logError,
  logResponse
}
