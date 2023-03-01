export interface Sortable {
  length: number
  compare(leftIdx: number, rightIdx: number): boolean
  swap(leftIdx: number, rightIdx: number): void
}

export interface SortableOptions {
  order: number
}
