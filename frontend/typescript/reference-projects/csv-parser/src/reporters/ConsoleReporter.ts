import { Target } from '../ts/types'

/**
 * Implementation of a Target -
 * this class reports out results from our system to the console
 */
export class ConsoleReporter implements Target {
  public print(report: string): void {
    console.log(report)
  }
}
