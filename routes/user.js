const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('./../model/resModel')

router.post('/login', function (ctx, next) {
  console.log(ctx.request.body)
  ctx.body = new SuccessModel('登录成功了')
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
