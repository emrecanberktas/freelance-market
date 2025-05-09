import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: { type: Number, required: true },
  deliveryTime: { type: Number, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
});
