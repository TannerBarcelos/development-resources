"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./readers/MatchReader");
const Summarizer_1 = require("./Summarizer");
const fileReader = MatchReader_1.MatchReader.fromCsv('football.csv');
const summary = Summarizer_1.Summarizer.generateWinSummary('Man United', 'html');
fileReader.load();
summary.report(fileReader.dumps());
