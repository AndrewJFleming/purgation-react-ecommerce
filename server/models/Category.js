import mongoose from "mongoose";

const CategorySchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: false },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);
