import { BaseContext } from 'koa'
import Router = require('koa-router')
import { spotifyCallback } from './spotify'
import { withTime } from 'utils/logger'

const routes = new Router()

routes.get(
  '/auth/spotify/callback',
  async (ctx: BaseContext): Promise<void> => {
    withTime('/auth/spotify/callback')
    await spotifyCallback(ctx)
  },
)

export default routes
