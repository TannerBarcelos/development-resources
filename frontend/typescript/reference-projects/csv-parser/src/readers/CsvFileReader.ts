import fs from 'fs'

/**
 * Loads and parses out a CSV file into chunks of rows
 */
export class CsvFileReader {
  private fileContents: string[][] = []
  private fileName: string

  constructor(fileName: string, options?: {}) {
    this.fileName = fileName
  }

  public read(): void {
    const file = fs.readFileSync(this.fileName, {
      encoding: 'utf-8',
    })

    const rows: string[] = file.split('\n')

    this.fileContents = rows.map((row: string): string[] => {
      return row.split(',')
    })
  }

  get data(): string[][] {
    return this.fileContents
  }
}
