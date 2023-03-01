export const toDate = (dateString: string): Date => {
  const parsedDate = dateString.split('/')
  const day: number = parseInt(parsedDate[0])
  const month: number = parseInt(parsedDate[1]) - 1
  const year: number = parseInt(parsedDate[2])
  return new Date(year, month, day)
}
