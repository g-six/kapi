import { getData, storeData } from '../redis-client'

interface MockedRedisClient {
  createClient: () => {}
}
const redis: MockedRedisClient = jest.genMockFromModule('redis')

describe('redis-client', (): void => {
  describe('getData', getDataTest)
  describe('storeData', storeDataTest)

  // +--------------------------------------------------------
  // | Test definitions and variables should be declared below
  // +--------------------------------------------------------
  const spySet = jest.fn()
  const redis_client = {
    get: (key, cb): boolean => {
      cb(undefined, key)
      return true
    },
    set: spySet,
  }

  redis.createClient = async (): Promise<{}> => redis_client

  const spyCreateClient = jest.spyOn(redis, 'createClient')

  function getDataTest(): void {
    test('should retrieve key', async (): Promise<void> => {
      const key = 'get_this_key'
      const result = await getData(key)
      expect(result).toEqual(key)
    })
  }

  function storeDataTest(): void {
    test('should connect to redis and store', async (): Promise<void> => {
      const mock_value = 'with some value'
      await storeData({ some_key: mock_value })

      expect(spyCreateClient).toHaveBeenCalledTimes(1)
      expect(spySet).toHaveBeenCalledWith('some_key', mock_value)
    })
  }
})
