import { getYmd, getHms } from "./time-format";

export const simple = (message: string) => (console.log(message))
export const withTime = (message: string) => {
  const d = new Date()
  const timestamp: string = [
    getYmd(d),
    getHms(d),
  ].join(' ')
  console.log(`[${timestamp}] ${message}`)
}