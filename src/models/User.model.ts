import mongoose, { Schema } from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  animesFav: {
    type: String,
    default: "[]",
  },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
