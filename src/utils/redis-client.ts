import { createClient } from 'redis'
import { promisify } from 'util'
import config from 'config'

const { redis } = config

export interface KeyStore {
  [key: string]: string
}

export const getData = async (key: string): Promise<string> => {
  const client = await createClient({
    host: redis.host,
  })
  const asyncRedisGet = promisify(client.get)
  return await asyncRedisGet(key)
}

export const storeData = async (data: IKeyStore): Promise<void> => {
  const client = await createClient({
    host: redis.host,
  })

  if (!data) throw new Error('No redis data to store')

  Object.keys(data).forEach((key): void => {
    client.set(key, data[key])
  })
}
