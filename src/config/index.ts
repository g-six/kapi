import * as default_config from './defaults'

let overrides = {}

if (
  process.env.NODE_ENV
) {
  if (['test'].indexOf(process.env.NODE_ENV) < 0) {
    // IMPORTANT!!!
    // Extract all environment variables here
    const {
      SPOTIFY_CLIENT_ID: client_id,
      SPOTIFY_CLIENT_SECRET: client_secret,
      SPOTIFY_REDIRECT_URI: redirect_uri,
    } = process.env
    overrides = {
      spotify: {
        client_id,
        client_secret,
        redirect_uri,
      }
    }
  }
}

export default {
  ...default_config,
  ...overrides,
}
