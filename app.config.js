const Koa = require('koa')
const json = require('koa-json')
const logger = require('koa-logger')
const auth = require('./server/routes/auth')
const api = require('./server/routes/api')
const jwt = require('koa-jwt')
const router = require('koa-router')()

const app = new Koa()
app.use(require('koa-bodyparser')())
app.use(json())
app.use(logger())

app.use(async function (ctx, next) {
  let start = new Date()
  await next()
  let ms = new Date() - start
  console.log('%s %s - %s', this.method, this.url, ms)
})

app.use(async function(ctx, next) {
  try {
    await next()
  } catch (error) {
    if (401 === error.status) {
      this.status = 401
      this.body = {
        success: false,
        token: null,
        info: 'unauth to access!',
      }
    } else {
      throw error
    }
  }
})
// router.use('/auth/user', async function (ctx) {
//   console.log('========', ctx)
// })
app.use(jwt({
  secret: 'vue-koa-demo'
}).unless({path: [/^\/auth/] //数组中的路径不需要通过jwt验证
}))
router.use('/auth', auth.routes())
router.use('/api', api.routes())
app.use(router.routes())
app.on('error', function (err, ctx) {
  console.log('server error', err)
})

app.listen(8889, () => {
  console.log('koa is server listening 8889')
})

module.exports = app
