"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const userModel_1 = require("../models/userModel");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const requireAuth = async (req, res, next) => {
    let apiToken = "";
    const authHeader = req.headers.authorization ?? "";
    if (authHeader === "") {
        throw new Error("Authorization header does not exist - please pass a Bearer authorization header");
    }
    else if (!authHeader.startsWith("Bearer")) {
        throw new Error("Bearer authorization token not found - Please pass a bearer token");
    }
    else {
        try {
            try {
                apiToken = authHeader.split(" ")[1];
                const { userId } = jsonwebtoken_1.default.verify(apiToken, process.env.TOKEN_SECRET);
                const foundUser = await userModel_1.User.findById(userId).select("-password");
                if (foundUser != null)
                    req.user = foundUser;
                next();
            }
            catch (error) {
                console.log(error);
                res.status(401);
                throw new Error("User not authorized");
            }
            if (apiToken.length === 0) {
                res.status(401);
                throw new Error("Not authorized - no API Token");
            }
        }
        catch (error) {
            res.status(500);
            throw new Error(error);
        }
    }
};
exports.requireAuth = requireAuth;
