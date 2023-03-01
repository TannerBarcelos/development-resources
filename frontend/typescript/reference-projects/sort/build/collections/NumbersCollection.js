"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("../Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
        this.len = data.length;
    }
    swap(leftIdx, rightIdx) {
        if (this.data[leftIdx] > this.data[rightIdx]) {
            const temp = this.data[leftIdx];
            this.data[leftIdx] = this.data[rightIdx];
            this.data[rightIdx] = temp;
        }
    }
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx] > this.data[rightIdx];
    }
    get length() {
        return this.len;
    }
}
exports.NumbersCollection = NumbersCollection;
