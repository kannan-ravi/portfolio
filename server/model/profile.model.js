import mongoose, { Schema } from "mongoose";

const profileSchema = new Schema(
  {
    full_name: { type: String, required: true },
    credentials: { type: mongoose.Schema.Types.ObjectId, ref: "Auth" },
    email: { type: String, required: true },
    description: { type: String, required: true },
    profile_pic: { type: String },
    logo: { type: String, required: true },
    skills: { type: Array, required: true },
    address: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    zipcode: { type: String },
  },
  { timestamps: true }
);

const profileModel = mongoose.model("admin", profileSchema);
export default profileModel;
