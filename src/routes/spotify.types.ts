export enum ApiEntrypoints {
  TOKEN = 'https://accounts.spotify.com/api/token'
}

export enum GrantType {
  AUTHORIZATION_CODE = 'authorization_code'
}

export interface ISpotifyTokenRequest {
  code: string,
  grant_type: GrantType,
  redirect_uri: string,
}

export interface ISpotifyResponse {
  errors?: string
  data?: object
}
