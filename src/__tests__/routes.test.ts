import { healthCheck } from '../routes/general'

const ctx: any = {}

describe('/status', () => {
  it('should return status string', async () => {
    const expected = `Life's a peach, eat more apples!`
    await healthCheck(ctx)
    expect(ctx.body).toEqual(expected)
  })
})
