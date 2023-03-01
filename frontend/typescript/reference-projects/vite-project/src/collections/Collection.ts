import { Events } from '../models/Events'
import axios, { AxiosResponse } from 'axios'

export class Collection<T, K> {
  public models: T[] = []
  public events: Events = new Events()

  constructor(
    public baseUrl: string,
    public deserialize: (serializedPayload: K) => T,
  ) {}

  get on() {
    return this.events.on
  }
  get dispatch() {
    return this.events.dispatch
  }

  fetch = (): void => {
    axios.get(this.baseUrl).then((res: AxiosResponse) => {
      res.data.forEach((val: K) => {
        this.models.push(this.deserialize(val))
      })
      this.dispatch('change')
    })
  }
}

// T = type of collection (User, etc) and K is the serializer of attribute / some data to design some outcome
