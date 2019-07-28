import { createToken } from '../create-token'
import { ISpotifyResponse } from '../types'

jest.genMockFromModule('axios')
const axios = require('axios')
axios.post = jest.fn((uri: string, qry: string) => {
  if (!uri) throw 'no uri'

  if (qry.substr(5, 4) === 'test') {
    throw { stack: 'test' }
  }

  return {
    data: {
      uri,
      qry,
    }
  }
})

describe('/spotify', () => {
  describe('POST /authorize', () => {
    it('should return error message on fail', createTokenErrorTest)

    it('should return json on success', createTokenSuccessTest)
  })
})

async function createTokenErrorTest() {
  const results: ISpotifyResponse = await createToken('test')
  expect(results.errors).toBeDefined()
}

async function createTokenSuccessTest() {
  const results: ISpotifyResponse = await createToken('valid-code')
  expect(results.data).toBeDefined()
}
