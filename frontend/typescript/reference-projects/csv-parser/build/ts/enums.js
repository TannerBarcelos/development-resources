"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REPORTERS = exports.MATCH_OUTCOMES = void 0;
var MATCH_OUTCOMES;
(function (MATCH_OUTCOMES) {
    MATCH_OUTCOMES["HOME_WIN"] = "H";
    MATCH_OUTCOMES["AWAY_WIN"] = "A";
    MATCH_OUTCOMES["DRAW"] = "D";
})(MATCH_OUTCOMES = exports.MATCH_OUTCOMES || (exports.MATCH_OUTCOMES = {}));
var REPORTERS;
(function (REPORTERS) {
    REPORTERS["CONSOLE"] = "console";
    REPORTERS["HTML"] = "html";
    REPORTERS["JSON"] = "json";
})(REPORTERS = exports.REPORTERS || (exports.REPORTERS = {}));
