import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema(
  {
    name: { type: String, required: true },
    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },
    icon: {
      name: { type: String, required: true },
      library: { type: String, required: true },
    },
    color: { type: String },
  },
  { timestamps: true }
);

const skillModel = mongoose.model("skill", skillSchema);
export default skillModel;
