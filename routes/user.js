const router = require('koa-router')()

router.get('/login', function (ctx, next) {
  ctx.body = 'this is login!'
})

router.get('/session-test', async (ctx, next) => {
  if (ctx.session.viewCount === null) {
    ctx.session.viewCount= 0 
  }
  ctx.session.viewCount++
  ctx.body = {
    errno: 0,
    viewCount: ctx.session.viewCount
  }
})

module.exports = router
