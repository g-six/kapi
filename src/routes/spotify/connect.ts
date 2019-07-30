import config from '../../config'

import { ApiEntrypoints as SpotifyApi } from './types'

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
  ]
  return [SpotifyApi.AUTHORIZE, params.join('&')].join('?')
}
