"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const pointSchema = new mongoose_1.default.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number,
    },
});
const trackSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
    name: {
        type: String,
        default: "",
    },
    locations: [pointSchema],
});
exports.Track = mongoose_1.default.model("Track", trackSchema);
