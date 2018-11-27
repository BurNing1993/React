const router = require('koa-router')()
const controller = require('../controller')
router.get('/', controller.user.index)
router.post('/test', controller.home.test)
module.exports = router
