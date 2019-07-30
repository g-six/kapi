import { getHms, getYmd } from '../time-format'

describe('time-format util', (): void => {
  describe('getYmd', getYmdTest)
  describe('getHms', getHmsTest)

  function getHmsTest(): void {
    test('should return YYYY-MM-DD format', (): void => {
      const d = new Date('2012-01-31 23:09:59')
      const expected = '23:09:59'
      const result = getHms(d)
      expect(result).toEqual(expected)
    })
  }

  function getYmdTest(): void {
    test('should return YYYY-MM-DD format', (): void => {
      const d = new Date('2012-01-31')
      const expected = '2012-01-31'
      const result = getYmd(d)
      expect(result).toEqual(expected)
    })
  }
})
