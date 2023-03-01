import { AxiosPromise, AxiosResponse } from 'axios'

type Callback = () => void

interface Attrs<T> {
  setAttr(attr: T): void
  getAttr<K extends keyof T>(key: K): T[K]
  getAll(): T
}

interface Sync<T> {
  fetch(id: number): AxiosPromise<T>
  createOrUpdate(data: T): AxiosPromise
}

interface Events {
  on(event: string, callback: Callback): void
  dispatch(event: string, err?: any): void
}

interface I {
  id?: number
}

export class Model<T extends I> {
  private attrs: Attrs<T>
  private events: Events
  private sync: Sync<T>

  constructor(attrs: Attrs<T>, events: Events, sync: Sync<T>) {
    this.attrs = attrs
    this.events = events
    this.sync = sync
  }

  get on() {
    return this.events.on
  }

  get dispatch() {
    return this.events.dispatch
  }

  get attributes() {
    return this.attrs.getAll()
  }

  set = (update: T): void => {
    this.attrs.setAttr(update)
    this.events.dispatch('change')
  }

  fetch = (): void => {
    const id = this.attrs.getAttr('id')
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch a user resource without a valid user id')
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data)
    })
  }

  save = (): void => {
    this.sync
      .createOrUpdate(this.attrs.getAll())
      .then((_: AxiosResponse): void => {
        this.dispatch('save')
      })
      .catch((error) => this.dispatch('error', error))
  }
}
