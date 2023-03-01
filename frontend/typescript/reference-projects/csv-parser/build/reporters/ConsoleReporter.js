"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReporter = void 0;
/**
 * Implementation of a Target -
 * this class reports out results from our system to the console
 */
class ConsoleReporter {
    print(report) {
        console.log(report);
    }
}
exports.ConsoleReporter = ConsoleReporter;
