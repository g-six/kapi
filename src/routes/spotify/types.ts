import { IContext } from '../types'

export enum ApiEntrypoints {
    TOKEN = 'https://accounts.spotify.com/api/token',
    AUTHORIZE = 'https://accounts.spotify.com/authorize',
}

export enum GrantType {
    AUTHORIZATION_CODE = 'authorization_code'
}

export interface QueryContext extends IContext {
    query: {
        code: string
    }
}

export interface ISpotifyTokenRequest {
    code: string,
    grant_type: GrantType,
    redirect_uri: string,
}

export interface ISpotifyResponse {
    error?: string
    errors?: string
    data?: object
}