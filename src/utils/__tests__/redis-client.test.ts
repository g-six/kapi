import { getData, storeData } from '../redis-client'

// interface MockedCallback {
//   (error: Error | undefined, key: string): {}
// }

// interface MockedRedisClient {
//   createClient: () => {}
// }

// const redis: MockedRedisClient = jest.genMockFromModule('redis')

describe('redis-client', (): void => {
  describe('getData', getDataTest)
  describe('storeData', storeDataTest)

  // +--------------------------------------------------------
  // | Test definitions and variables should be declared below
  // +--------------------------------------------------------
  // const spySet = jest.fn()
  // const redis_client = {
  //   get: (key: string, cb: MockedCallback): boolean => {
  //     cb(undefined, key)
  //     return true
  //   },
  //   set: spySet,
  // }

  // redis.prototype.createClient = jest.fn(async (): Promise<{}> => redis_client)

  function getDataTest(): void {
    test('should retrieve key', async (): Promise<void> => {
      const key = 'get_this_key'
      const result = await getData(key)
      expect(result).toEqual(key)
    })

    test('should return blank string if key not found', async (): Promise<void> => {
      const expected = ''
      const result = await getData('invalid-key')
      expect(result).toEqual(expected)
    })
  }

  function storeDataTest(): void {
    test('should connect to redis and store', async (): Promise<void> => {
      const mock_value = 'with some value'
      await storeData({ some_key: mock_value })
      const stored_key = await getData('some_key')

      expect(stored_key).toEqual('some_key')
    })
  }
})
