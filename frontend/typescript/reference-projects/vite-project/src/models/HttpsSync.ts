import axios, { AxiosPromise } from 'axios'

interface C {
  id?: number
}

export class HttpSync<T extends C> {
  public baseUrl: string
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  fetch = (id: number): AxiosPromise<T> => {
    return axios.get(`${this.baseUrl}/${id}`)
  }

  createOrUpdate = (data: T): AxiosPromise => {
    const { id } = data
    if (id) {
      return axios.put(`${this.baseUrl}/${id}`, data)
    } else {
      return axios.post(this.baseUrl, data)
    }
  }
}
