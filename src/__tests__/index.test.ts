import { greet } from '..'

describe('greet', () => {
  it('should greet', () => {
    const expected = 'hello'

    const results = greet()

    expect(results).toEqual(expected)
  })
})
