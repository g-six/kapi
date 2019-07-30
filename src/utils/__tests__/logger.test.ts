import { simple, withTime } from '../logger'
import { getYmd, getHms } from '../time-format'

jest.genMockFromModule('console')
console.log = jest.fn((message: string): string => message)

describe('logger', (): void => {
  describe('simple', simpleLoggerTest)
  describe('withTime', withTimeLoggerTest)
})

function simpleLoggerTest(): void {
  unmockConsole()
  test('should log', (): void => {
    simple('test')
    expect(console.log).toHaveBeenCalled()
  })
}

function withTimeLoggerTest(): void {
  unmockConsole()
  test('should log with time', (): void => {
    const d = new Date()
    const timestamp = [getYmd(d), getHms(d)].join(' ')
    withTime('test')
    expect(console.log).toHaveBeenCalledWith(`[${timestamp}] test`)
  })
}

function unmockConsole(): void {
  afterAll((): void => {
    jest.unmock('console')
  })
}
