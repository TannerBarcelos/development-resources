"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
/**
 * Use function declarations to avoid 'this' binding issues
 */
userSchema.pre("save", function (next) {
    const user = this; // eslint-disable-line @typescript-eslint/no-this-alias
    if (!user?.isModified("password")) {
        return next();
    }
    bcrypt_1.default.genSalt(10, (err, salt) => {
        if (err != null) {
            return next(err);
        }
        bcrypt_1.default.hash(user.password, salt, (err, hash) => {
            if (err != null) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});
userSchema.methods.comparePassword = async function (pwd) {
    const user = this; // eslint-disable-line @typescript-eslint/no-this-alias
    return await new Promise((resolve, reject) => {
        bcrypt_1.default.compare(pwd, user.password, (err, isMatch) => {
            if (err != null)
                return reject(err);
            if (!isMatch)
                return reject(new Error("Passwords do not match"));
            return resolve(true);
        });
    });
};
exports.User = mongoose_1.default.model("User", userSchema);
