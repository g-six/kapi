import { BaseContext } from 'koa'
import { createToken } from '../spotify/create-token'
import { storeData, KeyStore } from 'utils/redis-client'

export const spotifyCallback = async (ctx: BaseContext): Promise<void> => {
  try {
    const { data } = await createToken(ctx.query.code)

    if (!data) throw new Error('No data received from Spotify API on attempt to create token')

    await storeData(data as KeyStore)

    ctx.body = {
      data,
    }
  } catch (e) {
    ctx.body = {
      error: e.message,
      errors: e.stack,
    }
  }
}
