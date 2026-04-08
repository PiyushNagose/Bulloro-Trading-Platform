const { Schema } = require("mongoose");

const OrdersSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    qty: {
      type: Number,
      required: true,
      min: 0.01,
    },
    price: {
      type: Number,
      required: true,
      min: 0.01,
    },
    mode: {
      type: String,
      required: true,
      uppercase: true,
      enum: ["BUY", "SELL"],
    },
  },
  { timestamps: true }
);

module.exports = { OrdersSchema };
