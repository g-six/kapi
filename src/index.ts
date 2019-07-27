import Cors = require('@koa/cors')
import Koa = require('koa')
import bodyParser = require('koa-bodyparser')
import { Server } from 'net'
import routes from './routes'

const app = new Koa()
app.use(
  Cors({
    allowHeaders: '*',
    exposeHeaders: ['kasl-key', 'client-secret', 'client-id'],
  }),
)

app.use(
  bodyParser({
    enableTypes: ['json', 'text'],
  }),
)

const startApp = (): Server => {
  app.use(routes.routes()).use(routes.allowedMethods())
  return app.listen(process.env.PORT).on('error', console.error)
}

export { startApp }
