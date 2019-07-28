import { BaseContext } from 'koa'
import Router = require('koa-router')
import { spotifyCallback } from './spotify'
import { withTime } from 'utils/logger'

const routes = new Router()

routes.get('/auth/spotify/callback', async (ctx: BaseContext) => {
  withTime('/auth/spotify/callback')
  return await spotifyCallback(ctx)
})

export default routes
