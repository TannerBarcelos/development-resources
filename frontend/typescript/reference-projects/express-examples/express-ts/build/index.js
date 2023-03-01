"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const generateSession_1 = require("./middlewares/generateSession");
const app = (0, express_1.default)();
app.use(generateSession_1.appSession);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/auth', authRoutes_1.default);
app.listen(3000, () => console.log('Listening on port 3000'));
