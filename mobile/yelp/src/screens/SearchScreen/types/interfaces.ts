import { Coords, Categories } from './types'

export type Transactions = ['Delivery', 'Pickup']

export interface Business {
  rating: number
  price: string
  phone: string
  id: string
  alias: string
  is_closed: boolean
  categories: Categories[]
  review_count: number
  name: string
  url: string
  image_url: string
  coordinates: Coords
  photos: []
  transactions: Transactions
}
