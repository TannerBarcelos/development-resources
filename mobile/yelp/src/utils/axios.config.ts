import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Xh3mH67p-OOpc-QL-PyTnztmdvtJLx8aAENkQ8uq9LWJ0mYxPs0BKvrvs0pqOPobwwlyk9a9gw2gD5rhZscK_R3JzuE_ykhxBw90-9YxMUR6j0Nqg3VYXEQDLHD8YnYx',
  },
})
