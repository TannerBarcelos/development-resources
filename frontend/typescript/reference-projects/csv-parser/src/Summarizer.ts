import { WinsAnalyzer } from './analyzers/WinsAnalyzer'
import { HtmlReporter } from './reporters/HtmlReporter'
import { ConsoleReporter } from './reporters/ConsoleReporter'
import { REPORTERS } from './ts/enums'
import { Target, Analyzer } from './ts/interfaces'
import { RowData } from './ts/types'

/**
 * Analyzes and outputs contents of a CSV file by ingesting two instances -
 * analyzer and target which do analysis and output results, respectively
 */
export class Summarizer {
  private analyzer: Analyzer
  private target: Target

  constructor(analyzer: Analyzer, target: Target) {
    this.analyzer = analyzer
    this.target = target
  }

  public static generateWinSummary(
    team: string,
    reportType: REPORTERS,
  ): Summarizer {
    let typeOfReport
    switch (reportType) {
      case REPORTERS.HTML:
        typeOfReport = new HtmlReporter()
        break
      case REPORTERS.CONSOLE:
        typeOfReport = new ConsoleReporter()
        break
      default:
        typeOfReport = new ConsoleReporter()
        break
    }
    return new Summarizer(new WinsAnalyzer(team), typeOfReport)
  }

  public report(rows: RowData[]): void {
    const report = this.analyzer.run(rows)
    this.target.print(report)
  }
}
