const router = require('koa-router')()

router.prefix('/product')

router.get('/list', function (ctx, next) {
  ctx.body = 'this is product list!'
})

router.get('/detail', function (ctx, next) {
  ctx.body = 'this is product detail!'
})

module.exports = router
