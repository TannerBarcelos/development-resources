export class Attrs<T> {
  private data: T
  constructor(data: T) {
    this.data = data
  }

  // Value of K can only ever be the key and its type of all possible keys in interface T
  getAttr = <K extends keyof T>(key: K): T[K] => {
    return this.data[key]
  }

  setAttr = (val: T): void => {
    Object.assign(this.data, val)
  }

  getAll = (): T => {
    return this.data
  }
}
