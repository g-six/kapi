import { BaseContext } from 'koa'
import { loadLocales } from '../locales'

describe('locales.getLocales', () => {
  test('should list supported locales (based on yml files)', async () => {
    const ctx = ({
      __: jest.fn(),
    } as unknown) as BaseContext

    const next = jest.fn()

    await loadLocales(ctx, next)

    expect(ctx.__('auth.authenticate', 'en')).toBeDefined()
  })
})
