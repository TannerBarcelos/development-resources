"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("../common/utils");
/**
 * Reads a csv file of football matches referencing through
 * composition, the file reader
 */
class MatchReader {
    constructor(reader) {
        this.matches = [];
        this.reader = reader;
    }
    static fromCsv(fileName) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(fileName));
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            return [
                (0, utils_1.toDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
    dumps() {
        return this.matches;
    }
}
exports.MatchReader = MatchReader;
