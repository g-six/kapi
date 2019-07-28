import { simple } from '../logger'

jest.genMockFromModule('console')
console.log = jest.fn()
describe('logger', () => {
  afterAll(() => {
    jest.unmock('console')
  })
  test('should log', () => {
    simple('test')
    expect(console.log).toHaveBeenCalled()
  });
})