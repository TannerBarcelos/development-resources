"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authCheck_1 = require("../middlewares/authCheck");
const router = express_1.default.Router();
const authController_1 = require("../controllers/authController");
router.get('/', authController_1.isLoggedIn);
router.get('/login', authController_1.createLogin);
router.post('/login', authController_1.login);
router.get('/logout', authController_1.logout);
router.get('/dashboard', authCheck_1.requireAuth, authController_1.getUserCredentials);
exports.default = router;
