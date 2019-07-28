import Cors = require('@koa/cors')
import Koa = require('koa')
import bodyParser = require('koa-bodyparser')
import { Server } from 'net'
import { auth, general, spotify } from './routes'

const locales = require('koa-locales')

const app = new Koa()

const locale_config = {
  defaultLocale: 'en',
  dir: '../locales',
  locales: ['en', 'zn-CN'],
};

locales(app, locale_config)

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
  app.use(auth.routes()).use(auth.allowedMethods())
  app.use(general.routes()).use(general.allowedMethods())
  app.use(spotify.routes()).use(spotify.allowedMethods())

  console.log(process.env.PORT)
  return app.listen(process.env.PORT).on('error', console.error)
}

export { startApp }