import { generateSpotifyAuthLink } from '../connect'
import { ApiEntrypoints as SpotifyEntrypoints } from '../types'

describe('auth routes', () => {
  describe('generateSpotifyAuthLink', () => {
    test('should return url to authorize Spotify', () => {
      const expected = SpotifyEntrypoints.AUTHORIZE
      const results = generateSpotifyAuthLink().split('?')[0]
      expect(results).toEqual(expected)
    })
  })
})