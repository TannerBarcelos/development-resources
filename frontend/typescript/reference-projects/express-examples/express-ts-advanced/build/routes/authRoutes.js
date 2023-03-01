"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authCheck_1 = require("../middlewares/authCheck");
var router = express_1.default.Router();
var authController_1 = require("../controllers/authController");
router.get('/', authController_1.isLoggedIn);
router.get('/login', authController_1.createLogin);
router.post('/login', authController_1.login);
router.get('/logout', authController_1.logout);
router.get('/dashboard', authCheck_1.requireAuth, authController_1.getUserCredentials);
exports.default = router;
