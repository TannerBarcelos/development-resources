"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./controllers/authController");
var express_1 = __importDefault(require("express"));
var generateSession_1 = require("./middlewares/generateSession");
var Router_1 = require("./utils/Router");
var app = (0, express_1.default)();
app.use(generateSession_1.appSession);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(Router_1.Router.getExpressRouterInstance());
app.listen(3000, function () { return console.log('Listening on port 3000'); });
/**
 * this app re-implements our own custom decorator based express backend
 * from scratch. To do this not from scratch and leverage an npm library
 * ts-express-decorators is an option. I am inclined to say this code we wrote
 * is actually impressive and should be published as our own tool
 */
