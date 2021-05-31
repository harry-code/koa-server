const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('./../model/resModel')
const { getUser } = require('../controller/user')

router.prefix('/user')

router.post('/login', async function (ctx, next) {
  if (!ctx.session) {
    ctx.session.userInfo = {}
    return
  }
  const { username, password } = ctx.request.body
  const res = await getUser(username, password)
  ctx.session.userInfo = { username, password }
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
