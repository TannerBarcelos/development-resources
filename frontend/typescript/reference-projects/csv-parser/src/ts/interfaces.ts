import { RowData } from './types'

export interface Analyzer {
  run(rows: RowData[]): string
}

export interface Target {
  print(report: string): void
}

export interface DataReader {
  read(): void
  data: string[][]
}
