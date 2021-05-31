const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('./../model/resModel')
const { getUser } = require('../controller/user')

router.prefix('/user')

router.post('/login', async function (ctx, next) {
  const { username, password } = ctx.request.body
  const res = await getUser(username, password)
  if (res.username) {
    ctx.session.username = res.username
    ctx.body = new SuccessModel()
    return
  }
  ctx.body = new ErrorModel('登录失败')
})

module.exports = router
