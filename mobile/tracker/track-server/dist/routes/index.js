"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const requireAuth_1 = require("../middlewares/requireAuth");
const authRoutes_1 = __importDefault(require("./authRoutes"));
const trackRoutes_1 = __importDefault(require("./trackRoutes"));
const router = express_1.default.Router();
router.use("/tracks", requireAuth_1.requireAuth, trackRoutes_1.default); // eslint-disable-line @typescript-eslint/no-misused-promises
router.use("/auth", authRoutes_1.default);
exports.default = router;
