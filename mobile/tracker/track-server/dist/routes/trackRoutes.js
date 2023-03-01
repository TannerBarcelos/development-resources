"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trackModel_1 = require("../models/trackModel");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    try {
        const tracks = await trackModel_1.Track.find({ userId: req?.user?._id });
        res.status(200).json({ tracks, error: null });
    }
    catch (error) {
        res.status(422).json({ tracks: null, error });
    }
});
router.post("/create", async (req, res) => {
    const { name, locations } = req.body;
    if (!name || !locations) {
        res.status(422).send({
            error: "You must provide a name and list of location points",
            track: null,
        });
    }
    else {
        try {
            const track = await new trackModel_1.Track({
                name,
                locations,
                userId: req?.user?._id,
            }).save();
            res.json({ track, error: null });
        }
        catch (error) {
            res.status(422).json({ tracks: null, error });
        }
    }
});
exports.default = router;
