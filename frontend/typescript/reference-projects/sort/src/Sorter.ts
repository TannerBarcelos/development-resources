import { SortableOptions } from './common/ts/interfaces'

export abstract class Sorter {
  sort(opts?: SortableOptions): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }
  // Must be implemented in sub classes - whole point of abstract classes
  public abstract compare(leftIdx: number, rightIdx: number): boolean
  public abstract swap(leftIdx: number, rightIdx: number): void
  public abstract length: number
}
