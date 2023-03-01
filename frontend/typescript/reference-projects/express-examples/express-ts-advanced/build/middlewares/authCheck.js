"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
var requireAuth = function (request, response, next) {
    var _a;
    if (!((_a = request === null || request === void 0 ? void 0 : request.session) === null || _a === void 0 ? void 0 : _a.user)) {
        response.status(403).send("\n        <div>\n            <h1>Not Permitted...</h1>\n        </div>\n    ");
        return;
    }
    else {
        next();
    }
};
exports.requireAuth = requireAuth;
