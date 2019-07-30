export enum ContentTypes {
  HTML = 'text/html',
  JSON = 'application/json',
}

export interface Context {
  body: {
    data: object
  }
}

export interface Response {
  body: {
    data: {}
  }
}

export interface PlainTextResponse {
  body: string
  res: {
    setHeader: (key: string, value: string) => void
  }
}
