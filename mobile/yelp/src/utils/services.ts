import { axiosInstance as axios } from './axios.config'
import { Business } from '../screens/SearchScreen/types/interfaces'
import { Review } from '../screens/BusinessScreen/types/interfaces'

type Businesses = {
  businesses: Business[]
}

type Reviews = {
  reviews: Review[]
}

export const services = {
  get: {
    businesses: {
      // Get all businesses
      all: async (term: string): Promise<Business[]> => {
        const res = await axios.get<Businesses>('/search', {
          params: {
            limit: 50,
            term,
            location: 'san jose',
          },
        })
        return res.data.businesses
      },
      // Get a single business
      byId: async (id: string): Promise<Business> => {
        const res = await axios.get<Business>(`/${id}`)
        return res.data
      },

      // Get all reviews
      reviews: async (id: string): Promise<Review[]> => {
        const res = await axios.get<Reviews>(`/${id}/reviews`)
        return res.data.reviews
      },
    },
  },
}
