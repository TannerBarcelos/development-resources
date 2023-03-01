import fs from 'fs'
import { Target } from '../ts/interfaces'

/**
 * Implementation of a Target -
 * this class reports out results from our system to html
 */
export class HtmlReporter implements Target {
  private outFile: string

  // Can take in an optional file output name
  constructor(outFile: string = 'analysis.html') {
    this.outFile = outFile
  }
  public print(report: string): void {
    const html = `
        <div>
            <h1>Analysis</h1>
            <div>${report}</div>
        </div>
    `

    // Create the output directory if it does not exist
    if (!fs.readdirSync('src').includes('reports')) {
      fs.mkdir('src/reports', (err) => {
        if (err) throw err
      })
    }

    fs.writeFileSync(`src/reports/${this.outFile}`, html)
  }
}
