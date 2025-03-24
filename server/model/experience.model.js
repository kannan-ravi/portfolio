import mongoose, { mongo, Schema } from "mongoose";

const experienceSchema = new Schema(
  {
    company_name: { type: String, required: true },
    company_website: { type: String, required: true },
    position: { type: String, required: true },
    location: { type: String },
    description: { type: String },
    worked_from: { type: Date, required: true },
    worked_until: { type: Date },
    currently_working: { type: Boolean, required: true },
    projects_worked_on: { type: Schema.Types.ObjectId, ref: "project" },
    skills_used: { type: Schema.Types.ObjectId, ref: "skill" },
  },
  { timestamps: true }
);

const experienceModel = mongoose.model("experience", experienceSchema);
export default experienceModel;
