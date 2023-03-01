import { Request, Response, Router } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { IAuthBody } from "../ts/types";
import { User } from "../models/userModel";
import jwt, { Secret } from "jsonwebtoken";

const router = Router();

router.post(
  "/signup",
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  async (req: Request<any, any, IAuthBody>, res: Response) => {
    const { email, password } = req.body;
    try {
      const user = await new User({ email, password }).save();
      const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
      res.json({ token });
    } catch (err) {
      return res.status(422).json(err.message);
    }
  }
);

router.post(
  "/signin",
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  async (req: Request<ParamsDictionary, any, IAuthBody>, res: Response) => {
    const { email, password } = req.body;
    if (email === "" || password === "") {
      return res
        .status(422)
        .send({ token: null, error: "Must provide email and password" });
    }
    try {
      const user = await User.findOne({ email });
      if (user == null) {
        return res
          .status(422)
          .json({ token: null, error: "Invalid password or email" });
      }
      const isValid = await user.comparePassword(password);
      if (isValid) {
        const token = jwt.sign(
          { userId: user._id },
          process.env.TOKEN_SECRET as Secret
        );
        res.status(200).json({ token, error: null });
      } else {
        return res.json({ token: null, error: isValid });
      }
    } catch (err) {
      return res.status(422).json({ token: null, error: err });
    }
  }
);

export default router;
