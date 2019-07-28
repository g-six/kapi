import { BaseContext } from 'koa'
import Router = require('koa-router')
import { ContentTypes } from '../types'
import { generateSpotifyAuthLink } from './connect'

const routes = new Router()

routes.get('/spotify/connect', (ctx: BaseContext) => {
  ctx.res.setHeader('content-type', ContentTypes.HTML)
  ctx.body = `<a href="${generateSpotifyAuthLink()}">${ctx.__('HERE')}</a>`
})

export default routes
