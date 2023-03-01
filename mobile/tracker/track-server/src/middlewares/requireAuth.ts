import { Response, NextFunction } from "express";
import { User } from "../models/userModel";
import jwt, { Secret } from "jsonwebtoken";
import { IJWTPayload, IRequestWithUser } from "../ts/types";

export const requireAuth = async (
  req: IRequestWithUser,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let apiToken: string = "";
  const authHeader = req.headers.authorization ?? "";
  if (authHeader === "") {
    throw new Error(
      "Authorization header does not exist - please pass a Bearer authorization header"
    );
  } else if (!authHeader.startsWith("Bearer")) {
    throw new Error(
      "Bearer authorization token not found - Please pass a bearer token"
    );
  } else {
    try {
      try {
        apiToken = authHeader.split(" ")[1];
        const { userId } = jwt.verify(
          apiToken,
          process.env.TOKEN_SECRET as Secret
        ) as IJWTPayload;
        const foundUser = await User.findById(userId).select("-password");
        if (foundUser != null) req.user = foundUser;
        next();
      } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error("User not authorized");
      }
      if (apiToken.length === 0) {
        res.status(401);
        throw new Error("Not authorized - no API Token");
      }
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  }
};
