"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var express_1 = __importDefault(require("express"));
// Singleton - one router only for whole app
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.getExpressRouterInstance = function () {
        if (!Router.expressRouterInstance)
            Router.expressRouterInstance = express_1.default.Router();
        return this.expressRouterInstance;
    };
    return Router;
}());
exports.Router = Router;
