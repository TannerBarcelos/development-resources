import { RowData } from '../ts/types'
import { Analyzer } from '../ts/interfaces'
import { MATCH_OUTCOMES } from '../ts/enums'

/**
 * Implementation of an Analyzer -
 * Takes in a team and analizes the rows of the CSV file
 * to determine how many wins the given team got in a season
 */
export class WinsAnalyzer implements Analyzer {
  private team: string

  constructor(team: string) {
    this.team = team
  }

  public run(rows: RowData[]): string {
    let wins = 0
    for (let row of rows) {
      if (row[1] === 'Man United' && row[5] === MATCH_OUTCOMES.HOME_WIN) {
        wins++
      } else if (row[2] == 'Man United' && row[5] === MATCH_OUTCOMES.AWAY_WIN) {
        wins++
      }
    }
    return `Team ${this.team} won ${wins} games`
  }
}
