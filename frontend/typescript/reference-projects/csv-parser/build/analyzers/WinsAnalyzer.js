"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalyzer = void 0;
const enums_1 = require("../ts/enums");
/**
 * Implementation of an Analyzer -
 * Takes in a team and analizes the rows of the CSV file
 * to determine how many wins the given team got in a season
 */
class WinsAnalyzer {
    constructor(team) {
        this.team = team;
    }
    run(rows) {
        let wins = 0;
        for (let row of rows) {
            if (row[1] === 'Man United' && row[5] === enums_1.MATCH_OUTCOMES.HOME_WIN) {
                wins++;
            }
            else if (row[2] == 'Man United' && row[5] === enums_1.MATCH_OUTCOMES.AWAY_WIN) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} games`;
    }
}
exports.WinsAnalyzer = WinsAnalyzer;
