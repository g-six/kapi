import axios from 'axios'
import { BaseContext } from 'koa'
import * as querystring from 'querystring'
import Router = require('koa-router')

import config from '../config'
import {
  ApiEntrypoints as SpotifyApi,
  GrantType,
  ISpotifyResponse,
} from './spotify.types'
import { ContentTypes } from './types'

const { spotify } = config

const scopes = [
  'user-modify-playback-state',
  'playlist-modify-private',
  'playlist-read-private',
  'user-read-currently-playing',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'user-read-playback-state',
  'user-read-recently-played',
]

export const generateSpotifyAuthLink = (): string => {
  const params = [
    `client_id=${spotify.client_id}`,
    'response_type=code',
    `redirect_uri=${encodeURIComponent(spotify.redirect_uri)}`,
    `scope=${scopes.join('+')}`,
  ];
  return [SpotifyApi.AUTHORIZE, params.join('&')].join('?')
}

export const createToken = async (code: string): Promise<ISpotifyResponse> => {
  const base64: string = Buffer.from(`${spotify.client_id}:${spotify.client_secret}`).toString('base64')
  try {
    const token_request = {
      code,
      grant_type: GrantType.AUTHORIZATION_CODE,
      redirect_uri: spotify.redirect_uri,
    }

    const headers = {
      Authorization: `Basic ${base64}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    }
    console.log(headers, token_request)

    const results = await axios.post(
      SpotifyApi.TOKEN,
      querystring.stringify(token_request), {
        headers,
      },
    )
    return results
  } catch (e) {
    return {
      error: e.message,
      errors: e.stack,
    }
  }
}

const routes = new Router()

routes.get('/spotify/connect', (ctx: BaseContext) => {
  ctx.res.setHeader('content-type', ContentTypes.HTML)
  ctx.body = `<a href="${generateSpotifyAuthLink()}">${ctx.__('HERE')}</a>`
})

export default routes
