const path = require('path')

// log4js config
module.exports =
  {
    appenders: {
      console: {
        type: 'console' // 控制台输出
      },
      error: {
        type: 'dateFile', // 日志类型
        category: 'errLogger', // 日志名称
        filename: path.resolve(__dirname, '../logs/error'), // 日志输出位置，当目录文件或文件夹不存在时自动创建
        pattern: 'yyyy-MM-dd.log', // 日志输出模式
        maxLogSize: 104800, // 文件最大存储空间
        backups: 100 // 当文件内容超过文件存储空间时，备份文件的数量
      },
      response: {
        type: 'dateFile',
        category: 'resLogger',
        filename: path.resolve(__dirname, '../logs/response'),
        pattern: 'yyyy-MM-dd.log', // 日志输出模式
        alwaysIncludePattern: true,
        maxLogSize: 104800,
        backups: 100
      }
    },
    categories: {
      error: { appenders: ['error'], level: 'error' },
      response: { appenders: ['response', 'console'], level: 'info' },
      default: { appenders: ['response'], level: 'info' }
    },
    replaceConsole: true
  }
