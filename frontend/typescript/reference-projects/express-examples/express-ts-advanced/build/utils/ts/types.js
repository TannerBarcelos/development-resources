"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URI_METADATA = exports.HTTP_METHOD = void 0;
/**
 * Express session library does not support TS assignment directly to the session
 * object. We are doing req.session.user = {...} however this fails as it says
 * 'user' is not of type SessionData.
 *
 * To resolve this, the official docs say to add this snippet of code to override the
 * SessionData interface and define what data will be in the session.
 *
 * Step two is to add typeRoots configuration to tsconfig -
 *     "typeRoots": ["./src/ts/types", "./node_modules/@types"]
 *  ./src/<type_file_dest>
 */
// ./src/typings/express-session/index.d.ts
require("express-session");
require("reflect-metadata");
var HTTP_METHOD;
(function (HTTP_METHOD) {
    HTTP_METHOD["GET"] = "get";
    HTTP_METHOD["POST"] = "post";
    HTTP_METHOD["PUT"] = "put";
    HTTP_METHOD["DELETE"] = "delete";
    HTTP_METHOD["PATCH"] = "patch";
})(HTTP_METHOD = exports.HTTP_METHOD || (exports.HTTP_METHOD = {}));
var URI_METADATA;
(function (URI_METADATA) {
    URI_METADATA["PATH"] = "path";
    URI_METADATA["METHOD"] = "method";
    URI_METADATA["MIDDLEWARE"] = "middleware";
    URI_METADATA["VALIDATOR"] = "validator";
})(URI_METADATA = exports.URI_METADATA || (exports.URI_METADATA = {}));
