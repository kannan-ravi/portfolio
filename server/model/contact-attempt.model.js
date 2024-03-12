import mongoose, { Schema } from "mongoose";

const contactAttemptSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const contactAttemptModel = mongoose.model(
  "contact-attempt",
  contactAttemptSchema
);
export default contactAttemptModel;
