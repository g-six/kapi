export const getHms = (d: Date): string => {
  return d.toTimeString().substr(0,8)
}

export const getYmd = (d: Date): string => {
  return d.toISOString().split('T')[0]
}