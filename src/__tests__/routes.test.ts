import { healthCheck } from '../routes/general'
import { BaseContext } from 'koa'

interface GenericContext {
  [key: string]: string
}

const ctx: GenericContext | BaseContext = {}

describe('/status', (): void => {
  it('should return status string', async (): Promise<void> => {
    const expected = `Life's a peach, eat more apples!`
    await healthCheck(ctx as BaseContext)
    expect(ctx.body).toEqual(expected)
  })
})
