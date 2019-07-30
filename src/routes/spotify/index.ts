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
    withTime(`GET /spotify/connect - ${ctx.get('X-Forwarded-For')}`)
    ctx.res.setHeader('content-type', ContentTypes.HTML)
    const html = await readFileSync('static/connect-page.html')
    ctx.body = html
      .toString()
      .split('<!-- LINK_HERE -->')
      .join(`<a href="${generateSpotifyAuthLink()}">${ctx.__('HERE')}</a>`)
  },
)

export default routes
