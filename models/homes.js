const { Schema, model } = require("mongoose");

const homeSchema = new Schema(
  {
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    area: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isNegotiable: {
      type: Boolean,
      default: true,
    },
    isSold: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Home = model("home", homeSchema);

module.exports = Home;
