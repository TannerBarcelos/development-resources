import { CsvFileReader } from './CsvFileReader'
import { RowData } from '../ts/types'
import { MATCH_OUTCOMES } from '../ts/enums'
import { DataReader } from '../ts/interfaces'
import { toDate } from '../common/utils'

/**
 * Reads a csv file of football matches referencing through
 * composition, the file reader
 */
export class MatchReader {
  private matches: RowData[] = []
  private reader: DataReader

  constructor(reader: DataReader) {
    this.reader = reader
  }

  public static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName))
  }

  public load(): void {
    this.reader.read()
    this.matches = this.reader.data.map((row: string[]): RowData => {
      return [
        toDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MATCH_OUTCOMES,
        row[6],
      ]
    })
  }

  public dumps(): RowData[] {
    return this.matches
  }
}
