import axios from 'axios'
import * as querystring from 'querystring'

import config from '../../config'
import {
  ApiEntrypoints as SpotifyApi,
  GrantType,
  SpotifyResponse,
} from './types'

const { spotify } = config

export const createToken = async (code: string): Promise<SpotifyResponse> => {
  const base64: string = Buffer.from(
    `${spotify.client_id}:${spotify.client_secret}`,
  ).toString('base64')
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

    const results = await axios.post(
      SpotifyApi.TOKEN,
      querystring.stringify(token_request),
      {
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
