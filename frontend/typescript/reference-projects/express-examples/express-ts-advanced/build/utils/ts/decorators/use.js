"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
var types_1 = require("../types");
var use = function (middleware) {
    /**
     * target = the protoype of the object the decorator is attached to
     * key = the actual function, variable, etc. definition
     * desc =
     */
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(types_1.URI_METADATA.MIDDLEWARE, target, key) || [];
        middlewares.push(middleware);
        Reflect.defineMetadata(types_1.URI_METADATA.MIDDLEWARE, __spreadArray(__spreadArray([], middlewares, true), [middleware], false), target, key);
    };
};
exports.use = use;
