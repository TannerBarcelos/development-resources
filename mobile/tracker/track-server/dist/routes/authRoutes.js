"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userModel_1 = require("../models/userModel");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
router.post("/signup", 
// eslint-disable-next-line @typescript-eslint/no-misused-promises
async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await new userModel_1.User({ email, password }).save();
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, "MY_SECRET_KEY");
        res.json({ token });
    }
    catch (err) {
        return res.status(422).json(err.message);
    }
});
router.post("/signin", 
// eslint-disable-next-line @typescript-eslint/no-misused-promises
async (req, res) => {
    const { email, password } = req.body;
    if (email === "" || password === "") {
        return res
            .status(422)
            .send({ token: null, error: "Must provide email and password" });
    }
    try {
        const user = await userModel_1.User.findOne({ email });
        if (user == null) {
            return res
                .status(422)
                .json({ token: null, error: "Invalid password or email" });
        }
        const isValid = await user.comparePassword(password);
        if (isValid) {
            const token = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.TOKEN_SECRET);
            res.status(200).json({ token, error: null });
        }
        else {
            return res.json({ token: null, error: isValid });
        }
    }
    catch (err) {
        return res.status(422).json({ token: null, error: err });
    }
});
exports.default = router;
