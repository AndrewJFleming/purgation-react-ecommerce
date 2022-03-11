import mongoose from "mongoose";

const FeatureSchema = mongoose.Schema(
  {
    productId: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Feature", FeatureSchema);
