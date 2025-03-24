import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    full_name: { type: String },
    email: { type: String },
    headline: { type: String },
    about_me: { type: String },
    profile_pic: { type: String },
    logo: { type: String },
    address: { type: String },
    state: { type: String },
    city: { type: String },
    country: { type: String },
    zipcode: { type: String },
  },
  { timestamps: true }
);

const profileModel = mongoose.model("profile", profileSchema);
export default profileModel;
