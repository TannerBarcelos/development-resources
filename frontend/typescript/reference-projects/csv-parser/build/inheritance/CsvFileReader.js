"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(fileName, options) {
        this.contents = [];
        this.fileName = fileName;
    }
    read() {
        const file = fs_1.default.readFileSync(this.fileName, {
            encoding: 'utf-8',
        });
        const rows = file.split('\n');
        const generatedMatrix = rows.map((row) => {
            return row.split(',');
        });
        this.contents = generatedMatrix.map(this.transformRow);
    }
    dumps() {
        return this.contents;
    }
}
exports.CsvFileReader = CsvFileReader;
// Documentation
// Generic abstract class - can accept any type of csv file with different forms of data types, length, etc
// will not be instantiated anywhere but used as an extension to other classes that can implement custom
// csv readers on any T types but follow the same convention
