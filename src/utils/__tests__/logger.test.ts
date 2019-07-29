import { simple, withTime } from '../logger'
import { getYmd, getHms } from '../time-format';

jest.genMockFromModule('console')
console.log = jest.fn((message) => (message))

describe('logger', () => {
  describe('simple', simpleLoggerTest)
  describe('withTime', withTimeLoggerTest)
})

function simpleLoggerTest() {
  unmockConsole()
  test('should log', () => {
    simple('test')
    expect(console.log).toHaveBeenCalled()
  });
}

function withTimeLoggerTest() {
  unmockConsole()
  test('should log with time', () => {
    const d = new Date()
    const timestamp = [getYmd(d), getHms(d)].join(' ')
    withTime('test')
    expect(console.log).toHaveBeenCalledWith(`[${timestamp}] test`)
  });
}

function unmockConsole() {
  afterAll(() => {
    jest.unmock('console')
  })
}