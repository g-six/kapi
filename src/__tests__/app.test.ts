import { Server } from 'net'
import { startApp } from '../app'

describe('startApp', (): void => {
  let app: Server

  afterEach((): void => {
    // Important!!! Close connection
    // Otherwise there will be port
    // conflict errors
    app.close()
  })

  it('should start app', (): void => {
    app = startApp()
    expect(app.listening).toBe(true)
  })
})
