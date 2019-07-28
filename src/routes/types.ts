export enum ContentTypes {
  HTML = 'text/html',
  JSON = 'application/json',
}

export interface IContext {
  body: {
    data: object
  }
}

export interface IResponse {
  body: {
    data: {}
  }
}

export interface IPlainTextResponse {
  body: string
  res: {
    setHeader: (key: string, value: string) => void
  }
}