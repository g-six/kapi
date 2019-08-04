import { BaseContext } from 'koa'
import Router = require('koa-router')
import { ContentTypes } from '../types'
import { generateSpotifyAuthLink } from './connect'
import { withTime } from 'utils/logger'
import { readFileSync } from 'fs'

const routes = new Router()

routes.get(
  '/spotify/connect',
  async (ctx: BaseContext): Promise<void> => {
    withTime(ctx.__('SPOTIFY.CONNECT'))
    withTime(`GET /spotify/connect - ${ctx.get('X-Forwarded-For')}`)
    ctx.res.setHeader('content-type', ContentTypes.HTML)
    const html = await readFileSync('static/connect-page.html')
    ctx.body = html
      .toString()
      .split('<!-- MESSAGE_HERE -->')
      .join(ctx.__('spotify.connect'))
      .split('<!-- LINK_HERE -->')
      .join(
        `<a class="card-footer-item" href="${generateSpotifyAuthLink()}">${ctx.__(
          'auth.authenticate',
        )}</a>`,
      )
  },
)

export default routes
