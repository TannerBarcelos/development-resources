import { Sorter } from '../Sorter'

export class CharactersCollection extends Sorter {
  public data: string
  public len: number

  constructor(data: string) {
    super()
    this.data = data
    this.len = data.length
  }
  public swap(leftIdx: number, rightIdx: number): void {
    const chars = this.data.split('')
    const temp = this.data[leftIdx]
    chars[leftIdx] = chars[rightIdx]
    chars[rightIdx] = temp
    this.data = chars.join('')
  }
  public compare(leftIdx: number, rightIdx: number): boolean {
    return (
      this.data[leftIdx].toLocaleLowerCase() >
      this.data[rightIdx].toLocaleLowerCase()
    )
  }
  public get length(): number {
    return this.len
  }
}
