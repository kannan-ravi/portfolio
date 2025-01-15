import mongoose, { Mongoose, Schema } from "mongoose";

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    headline: { type: String, required: true },
    description: { type: Array },
    role: { type: String, required: true },
    live_link: { type: String },
    code_link: { type: String },
    media: { type: Array },
    type: { type: String, enum: ["fontend", "backend", "fullstack", "ui/ux"] },
    skills_used: { type: Schema.Types.ObjectId, ref: "skill" },
  },
  { timestamps: true }
);

const projectModel = mongoose.model("project", projectSchema);
export default projectModel;
