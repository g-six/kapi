export const simple = (message: string) => (console.log(message))
export const withTime = (message: string) => {
  const date = new Date().toLocaleDateString()
  const time = new Date().toLocaleTimeString()
  console.log(`${date} ${time}: ${message}`)
}