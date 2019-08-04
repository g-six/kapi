interface MockedCallback {
  (err: Error | undefined, key: string): string
}

interface MockedClient {
  get: (key: string, cb: MockedCallback) => {}
  set: () => {}
}

export const client = {
  get: async (key: string, cb: MockedCallback): Promise<string> => {
    return Promise.resolve(cb(undefined, key === 'invalid-key' ? '' : key))
  },
  set: jest.fn(),
}

export const createClient = async (): Promise<MockedClient> => {
  return client
}

export default {
  createClient,
}
