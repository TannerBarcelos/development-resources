import mongoose from "mongoose";
import { Request } from "express";

/**
 * Defines a user returned from a Mongoose query
 */
export interface IUser extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  comparePassword: (pwd: string) => Promise<boolean>;
}

/**
 * Defines a track logically and extending Document
 */
export interface ITrack extends mongoose.Document {
  name: string;
  locations: Point[];
}

/**
 * Defines a request body for auth
 */
export interface IAuthBody {
  email: string;
  password: string;
}

/**
 * Defines a JWT Payload Type
 */
export interface IJWTPayload {
  userId: string;
}

export interface Point {
  timestamp: number;
  coords: {
    latitude: number;
    longitude: number;
    altitude: number;
    accuracy: number;
    heading: number;
    speed: number;
  };
}

/**
 * Overwriting the request object to type it with a user object (For session / jwt)
 */
interface IRequestWithUser extends Request {
  user?: IUser;
}
