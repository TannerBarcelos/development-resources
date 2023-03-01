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
exports.controller = void 0;
require("reflect-metadata");
var Router_1 = require("../../Router");
var types_1 = require("../types");
// Used to validate 1 or many request body values that any endpoint might need - negates need to check for undefined body values in our api logic
var bodyValidator = function (keys) {
    return function (request, response, next) {
        if (!request.body)
            return response.status(422).json({ message: 'Invalid request' });
        // Loop every key (property or request body to parse)
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!request.body[key]) {
                return response.status(422).json({ message: "Missing property ".concat(key) });
            }
        }
        next();
    };
};
// controller decorator - defines a controller in our api
var controller = function (routePrefix) {
    // decorator - target is a class / constructor function (our controllers in our apis)
    return function (target) {
        // Create express router instance - using only one router for the whole app as a singleton
        var controllerRouter = Router_1.Router.getExpressRouterInstance();
        // Get all the keys (methods, properties, accessors ) in the controller - remember
        // target references the PROTOTYPE OBJECT OF THE OBJECT IT IS TAGGED TO
        for (var key in target.prototype) {
            var apiHandler = target.prototype[key]; // method name for the api endpoint
            var path = Reflect.getMetadata(types_1.URI_METADATA.PATH, target.prototype, key); // the method endpoint path i.e - /login
            var method = Reflect.getMetadata(types_1.URI_METADATA.METHOD, target.prototype, key); // the actual http method of the endpoint - passed in to second arg of @route(pathName, methodType)
            // Register the route to the express router using the method, endpoint path and the route apiHandler
            // this generates a full router, bundles up all endpoints and uris and everything else to be used as a single
            // snippet of middleware in our server.ts file (index.ts in this case)
            var middlewares = Reflect.getMetadata(types_1.URI_METADATA.MIDDLEWARE, target.prototype, key) ||
                [];
            var validator = bodyValidator(Reflect.getMetadata(types_1.URI_METADATA.VALIDATOR, target.prototype, key) ||
                []);
            if (path) {
                controllerRouter[method].apply(controllerRouter, __spreadArray(__spreadArray(["".concat(routePrefix).concat(path)], middlewares, false), [// attach any middlewares to the route middleware might be needed on - i.e an auth check middleware for a protected route
                    validator,
                    apiHandler], false));
            }
        }
    };
};
exports.controller = controller;
