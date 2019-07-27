import { Server } from 'net'
import { startApp } from '..'

describe('startApp', () => {
  let app: Server

  afterEach(() => {
    // Important!!! Close connection
    // Otherwise there will be port
    // conflict errors
    app.close()
  })

  it('should start app', () => {
    app = startApp()
    expect(app.listening).toBe(true)
  })
})
