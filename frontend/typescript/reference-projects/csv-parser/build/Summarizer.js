"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summarizer = void 0;
const WinsAnalyzer_1 = require("./analyzers/WinsAnalyzer");
const HtmlReporter_1 = require("./reporters/HtmlReporter");
const ConsoleReporter_1 = require("./reporters/ConsoleReporter");
const enums_1 = require("./ts/enums");
/**
 * Analyzes and outputs contents of a CSV file by ingesting two instances -
 * analyzer and target which do analysis and output results, respectively
 */
class Summarizer {
    constructor(analyzer, target) {
        this.analyzer = analyzer;
        this.target = target;
    }
    static generateWinSummary(team, reportType = enums_1.REPORTERS.CONSOLE) {
        let typeOfReport;
        switch (reportType) {
            case enums_1.REPORTERS.HTML:
                typeOfReport = new HtmlReporter_1.HtmlReporter();
                break;
            default:
                typeOfReport = new ConsoleReporter_1.ConsoleReporter();
                break;
        }
        return new Summarizer(new WinsAnalyzer_1.WinsAnalyzer(team), typeOfReport);
    }
    report(rows) {
        const report = this.analyzer.run(rows);
        this.target.print(report);
    }
}
exports.Summarizer = Summarizer;
