import express from "express";
import { requireAuth } from "../middlewares/requireAuth";

import authRoutes from "./authRoutes";
import trackRoutes from "./trackRoutes";

const router = express.Router();

router.use("/tracks", requireAuth, trackRoutes); // eslint-disable-line @typescript-eslint/no-misused-promises
router.use("/auth", authRoutes);

export default router;
