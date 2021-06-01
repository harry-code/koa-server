const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const path = require('path')
const fs = require('fs')
const morgan = require('koa-morgan')
const cors = require('koa2-cors')
const db = require('./models')
const { REDIS_CONF } = require('./conf/db')

const loadRoute = require('./routes')
const ENV = process.env.NODE_ENV

// session 配置
app.keys = ['lly0131ly_#123!'] // 加密串

// cors配置
app.use(
  cors({
    origin: "*",  // 允许 所有的都可以跨域
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 50000,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  })
).use(bodyparser({
  enableTypes: ['json', 'form', 'text']
})).use(
  json()
).use(
  logger()
).use(
  require('koa-static')(__dirname + '/public')
).use(session({
  cookie: {
    path: '/', // 全域名生效
    httpOnly: true, // 只能服务端修改
    maxAge: 24 * 60 * 60 * 1000 // 过期时间
  },
  // 配置 redis 地址
  store: redisStore({
    host: REDIS_CONF.host, 
    port: REDIS_CONF.port
  })
}))

if (ENV !== 'production') {
  app.use(morgan('dev'))
} else {
  const logFileName = path.join(__dirname, 'logs', 'access.log');
  const writeStream = fs.createWriteStream(logFileName, {
    flags: 'a'
  })
  app.use(morgan('combined', {
    stream: writeStream
  }))
}

// routes 路由注册
loadRoute(app)

app.listen(8081, () => {
  db.sequelize
    .sync({ force: false }) // If force is true, each DAO will do DROP TABLE IF EXISTS ..., before it tries to create its own table
    .then(async () => {
      console.log('sequelize connect success')
    })
    .catch(err => {
      console.log(err)
    })
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

// error handler
onerror(app)

module.exports = app
