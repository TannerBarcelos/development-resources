export interface Review {
  id: string
  rating: number
  user: {
    id: string
    profile_url: string
    image_url: string
    name: string
  }
  text: string
  time_created: Date
  url: string
}
