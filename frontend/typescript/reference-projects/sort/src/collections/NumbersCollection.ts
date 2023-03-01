import { Sorter } from '../Sorter'

export class NumbersCollection extends Sorter {
  public data: number[]
  public len: number

  constructor(data: number[]) {
    super()
    this.data = data
    this.len = data.length
  }

  public swap(leftIdx: number, rightIdx: number): void {
    if (this.data[leftIdx] > this.data[rightIdx]) {
      const temp = this.data[leftIdx]
      this.data[leftIdx] = this.data[rightIdx]
      this.data[rightIdx] = temp
    }
  }
  public compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx] > this.data[rightIdx]
  }
  public get length(): number {
    return this.len
  }
}
