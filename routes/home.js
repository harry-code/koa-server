const router = require('koa-router')()
const { getUser } = require('./../controller/user')
const loginCheck = require('./../middleware/loginCheck')
const { SuccessModel, ErrorModel } = require('./../conf/resModel')

router.get('/', async (ctx, next) => {
  const res = await getUser()
  ctx.body = new SuccessModel(res)
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.post('/json', loginCheck, async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
