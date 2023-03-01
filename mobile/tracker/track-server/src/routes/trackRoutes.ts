import { Response, Router } from "express";
import { Track } from "../models/trackModel";
import { IRequestWithUser, Point } from "../ts/types";

const router = Router();

router.get("/", async (req: IRequestWithUser, res: Response): Promise<void> => {
  try {
    const tracks = await Track.find({ userId: req?.user?._id });
    res.status(200).json({ tracks, error: null });
  } catch (error) {
    res.status(422).json({ tracks: null, error });
  }
});

router.post(
  "/create",
  async (req: IRequestWithUser, res: Response): Promise<void> => {
    const { name, locations }: { name: string; locations: Point[] } = req.body;
    if (!name || !locations) {
      res.status(422).send({
        error: "You must provide a name and list of location points",
        track: null,
      });
    } else {
      try {
        const track = await new Track({
          name,
          locations,
          userId: req?.user?._id,
        }).save();
        res.json({ track, error: null });
      } catch (error) {
        res.status(422).json({ tracks: null, error });
      }
    }
  }
);

export default router;
