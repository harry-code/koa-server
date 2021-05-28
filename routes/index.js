const router = require('koa-router')()
const { getUser } = require('./../controller/userController')
const { SuccessModel, ErrorModel } = require('./../model/resModel')

router.get('/', async (ctx, next) => {
  const res = await getUser()
  ctx.body = new SuccessModel(res)
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
