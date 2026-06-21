import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["PENDING","CANCELLED","DELIVERED"], // basically choises to choose from
    default:"PENDING"
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    ordersItems: {
      type: [orderItemSchema], // just jo hum ne subtodos mein jo kiya tha usko aur professional taraike se karne ka tarika
    },
    address: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Order = mongoose.model("Order", orderSchema);
