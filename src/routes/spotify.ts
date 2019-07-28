import axios from 'axios'
import * as querystring from 'querystring'
import config from '../config'

import {
  ApiEntrypoints,
  GrantType,
  ISpotifyResponse,
} from './spotify.types'

const { spotify } = config

export const createToken = async (code: string): Promise<ISpotifyResponse> => {
  try {
    const token_request = {
      code,
      grant_type: GrantType.AUTHORIZATION_CODE,
      redirect_uri: spotify.redirect_uri,
    }
    const results = await axios.post(
      ApiEntrypoints.TOKEN,
      querystring.stringify(token_request), {
        headers: {
          Authorization: `Basic ${Buffer.from(`${spotify.client_id}:${spotify.client_secret}`)}`
        }
      },
    )
    return results
  } catch (e) {
    return { errors: e.stack }
  }
}
