"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("../Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
        this.len = data.length;
    }
    swap(leftIdx, rightIdx) {
        const chars = this.data.split('');
        const temp = this.data[leftIdx];
        chars[leftIdx] = chars[rightIdx];
        chars[rightIdx] = temp;
        this.data = chars.join('');
    }
    compare(leftIdx, rightIdx) {
        return (this.data[leftIdx].toLocaleLowerCase() >
            this.data[rightIdx].toLocaleLowerCase());
    }
    get length() {
        return this.len;
    }
}
exports.CharactersCollection = CharactersCollection;
