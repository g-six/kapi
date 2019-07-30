import { generateSpotifyAuthLink } from '../connect'
import { ApiEntrypoints as SpotifyEntrypoints } from '../types'

describe('auth routes', (): void => {
  describe('generateSpotifyAuthLink', (): void => {
    test('should return url to authorize Spotify', (): void => {
      const expected = SpotifyEntrypoints.AUTHORIZE
      const results = generateSpotifyAuthLink().split('?')[0]
      expect(results).toEqual(expected)
    })
  })
})
