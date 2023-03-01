"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDate = void 0;
const toDate = (dateString) => {
    const parsedDate = dateString.split('/');
    const day = parseInt(parsedDate[0]);
    const month = parseInt(parsedDate[1]) - 1;
    const year = parseInt(parsedDate[2]);
    return new Date(year, month, day);
};
exports.toDate = toDate;
