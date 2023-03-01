import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from "../ts/types";

const userSchema = new mongoose.Schema({
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

  bcrypt.genSalt(10, (err, salt) => {
    if (err != null) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err != null) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = async function (pwd: string) {
  const user = this; // eslint-disable-line @typescript-eslint/no-this-alias
  return await new Promise((resolve, reject) => {
    bcrypt.compare(pwd, user.password, (err, isMatch) => {
      if (err != null) return reject(err);
      if (!isMatch) return reject(new Error("Passwords do not match"));
      return resolve(true);
    });
  });
};

export const User = mongoose.model<IUser>("User", userSchema);
