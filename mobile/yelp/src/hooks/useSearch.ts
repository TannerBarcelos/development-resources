import { useState, useEffect } from 'react'
import { services } from '../utils/services'
import { Business } from '../screens/SearchScreen/types/interfaces'
import { Review } from '../screens/BusinessScreen/types/interfaces'

interface Options {
  byId?: boolean
  includeReviews?: boolean
}

export const useSearch = (searchKey: string, options?: Options) => {
  const [reviews, setReviews] = useState<Review[]>([])
  const [result, setResult] = useState<Business[]>([])
  const [err, setErr] = useState('')

  const search = async () => {
    try {
      if (options) {
        if (options.includeReviews) {
          setReviews(await services.get.businesses.reviews(searchKey))
        }
        setResult([await services.get.businesses.byId(searchKey)]) // note putting in array even though the evendpoint just returns on Business. This is because this hook stores an internal array - regardless of 1 or many businesses
      } else {
        setResult(await services.get.businesses.all(searchKey))
      }
    } catch (error) {
      setErr(err)
    }
  }

  useEffect(() => {
    search()
  }, [searchKey])

  const returnObj: { result: Business[]; err: string; reviews?: Review[] } = {
    result,
    err,
  }

  if (options?.includeReviews) returnObj['reviews'] = reviews

  return returnObj
}
