"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
require("reflect-metadata");
var types_1 = require("../types");
/**
 * Get http method decorator
 * @param path
 * @returns
 */
var route = function (path, httpMethod) {
    return function (target, key, desc) {
        Reflect.defineMetadata(types_1.URI_METADATA.PATH, path, target, key);
        Reflect.defineMetadata(types_1.URI_METADATA.METHOD, httpMethod, target, key);
    };
};
exports.route = route;
