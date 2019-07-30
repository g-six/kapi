import Cors = require('@koa/cors')
import Koa = require('koa')
import bodyParser = require('koa-bodyparser')
import { Server } from 'net'
import { auth, general, spotify } from './routes'
import { readFileSync } from 'fs'

const app = new Koa()

const loadLanguageFiles = async (): Promise<void> => {
  const en_stream = await readFileSync('../locales/en.json').toString()
  const en = JSON.parse(en_stream)

  console.log(en)
}

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
  loadLanguageFiles()
  app.use(auth.routes()).use(auth.allowedMethods())
  app.use(general.routes()).use(general.allowedMethods())
  app.use(spotify.routes()).use(spotify.allowedMethods())

  console.log(process.env.PORT)
  return app.listen(process.env.PORT).on('error', console.error)
}

export { startApp }
