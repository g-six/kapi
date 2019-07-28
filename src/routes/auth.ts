import { BaseContext } from 'koa'
import Router = require('koa-router')
import { createToken } from './spotify'
// import config from '../config'
// import { ApiEntrypoints as SpotifyApi } from './spotify.types'
// import { ContentTypes } from './types'

// const { spotify } = config

const routes = new Router()
routes.get('/auth/spotify/callback', async (ctx: BaseContext) => {
  const { data } = await createToken(ctx.query.code)

  ctx.body = {
    data,
  }
})



export default routes
