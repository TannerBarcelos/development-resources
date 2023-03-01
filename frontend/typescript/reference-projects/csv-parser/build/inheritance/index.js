"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const types_1 = require("../types");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
let manUnitedWins = 0;
for (let match of reader.dumps()) {
    if (match[1] === 'Man United' && match[5] === types_1.MATCH_OUTCOMES.HOME_WIN) {
        manUnitedWins++;
    }
    else if (match[2] == 'Man United' && match[5] === types_1.MATCH_OUTCOMES.AWAY_WIN) {
        manUnitedWins++;
    }
}
console.log(`Manchester United won ${manUnitedWins} games`);
