export const post = (url: string, form_body: string | {}): {} | Error => {
  if (url === 'invalid') throw new Error('Mocked Axios error')

  if (typeof form_body === 'string') {
    // Test spotify auth
    if (form_body.split('code=valid-code').length > 1) {
      return { data: {} }
    }

    if (form_body.split('code=test').length > 1) {
      throw new Error('Invalid')
    }
  }

  return {
    data: {},
  }
}

export default { post }
