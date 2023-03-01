"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
/**
 * Loads and parses out a CSV file into chunks of rows
 */
class CsvFileReader {
    constructor(fileName, options) {
        this.fileContents = [];
        this.fileName = fileName;
    }
    read() {
        const file = fs_1.default.readFileSync(this.fileName, {
            encoding: 'utf-8',
        });
        const rows = file.split('\n');
        this.fileContents = rows.map((row) => {
            return row.split(',');
        });
    }
    get data() {
        return this.fileContents;
    }
}
exports.CsvFileReader = CsvFileReader;
