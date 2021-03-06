import { createToken } from '../create-token'
import { SpotifyResponse } from '../types'

interface MockedAxios {
  post: (uri: string, qry: string) => {}
}
const axios: MockedAxios = jest.genMockFromModule('axios')
axios.post = jest.fn((uri: string, qry: string): {} => {
  if (!uri) throw 'no uri'

  if (qry.substr(5, 4) === 'test') {
    throw { stack: 'test' }
  }

  return {
    data: {
      uri,
      qry,
    },
  }
})

describe('/spotify', (): void => {
  describe('POST /authorize', (): void => {
    it('should return error message on fail', createTokenErrorTest)

    it('should return json on success', createTokenSuccessTest)
  })
})

async function createTokenErrorTest(): Promise<void> {
  const results: SpotifyResponse = await createToken('test')
  expect(results.errors).toBeDefined()
}

async function createTokenSuccessTest(): Promise<void> {
  const results: SpotifyResponse = await createToken('valid-code')
  expect(results.data).toBeDefined()
}
