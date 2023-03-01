"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReporter = void 0;
const fs_1 = __importDefault(require("fs"));
/**
 * Implementation of a Target -
 * this class reports out results from our system to html
 */
class HtmlReporter {
    // Can take in an optional file output name
    constructor(outFile = 'analysis.html') {
        this.outFile = outFile;
    }
    print(report) {
        const html = `
        <div>
            <h1>Analysis</h1>
            <div>${report}</div>
        </div>
    `;
        // Create the output directory if it does not exist
        if (!fs_1.default.readdirSync('src').includes('reports')) {
            fs_1.default.mkdir('src/reports', (err) => {
                if (err)
                    throw err;
            });
        }
        fs_1.default.writeFileSync(`src/reports/${this.outFile}`, html);
    }
}
exports.HtmlReporter = HtmlReporter;
