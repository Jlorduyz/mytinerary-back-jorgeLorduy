import { Schema, model } from "mongoose";

let collection = "cities";

let schema = Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    country: { type: String, required: true },
    language: { type: String, required: true },
    currency: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

let City = model(collection, schema);

export default City;
