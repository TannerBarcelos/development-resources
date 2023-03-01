"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appSession = void 0;
const express_session_1 = __importDefault(require("express-session"));
exports.appSession = (0, express_session_1.default)({
    secret: 'super-secret-key',
    name: 'sid',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 24,
    },
});
