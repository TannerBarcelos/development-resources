import { Business } from '../screens/SearchScreen/types/interfaces'

export const filterByPrice = (
  result: Business[],
  price: string,
): Business[] => {
  return result.filter((result: Business) => {
    return result.price === price
  })
}
