import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      // usually buffer not stored here only public url of it is stored here by using cloud service provider like cloudnary, imageKit,etc
      type: String, // if different sizes me hai toh array mein rakhe ke bhi chije kar sakte hai
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      default: 0,
      type: Number,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

export const Product = mongoose.model("Product", productSchema);
