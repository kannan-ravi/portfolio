import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    position: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: Array, required: true },
    experience: { type: Array, required: true },
    Projects: { type: Array, required: true },
    socialLinks: { type: Array, required: true },
    aboutMe: { type: String, required: true },
    address: { type: String, required: true },
    profilePic: { type: String, required: true },
    collegeName: { type: String, required: true },
    companyName: { type: String, required: true },
    companyAddress: { type: String, required: true },
    totalLikes: { type: Number, default: 0 },
    totalPosts: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const adminModel = mongoose.model("admin", adminSchema);
export default adminModel;
