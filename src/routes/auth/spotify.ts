import { BaseContext } from 'koa'
import { createToken } from '../spotify/create-token'

export const spotifyCallback = async (ctx: BaseContext) => {
  const { data } = await createToken(ctx.query.code)

  ctx.body = {
    data,
  }
}
