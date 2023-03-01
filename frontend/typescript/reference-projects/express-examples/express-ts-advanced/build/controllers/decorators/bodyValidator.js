"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidator = void 0;
require("reflect-metadata");
var types_1 = require("../../utils/ts/types");
var bodyValidator = function () {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(types_1.URI_METADATA.VALIDATOR, keys, target, key);
    };
};
exports.bodyValidator = bodyValidator;
