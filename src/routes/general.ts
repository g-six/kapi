import { BaseContext } from 'koa'
import Router from 'koa-router'

export const healthCheck = async (ctx: BaseContext): Promise<void> => {
  ctx.body = `Life's a peach, eat more apples!`
}

const routes = new Router()

routes.get('/status', healthCheck)

export default routes
