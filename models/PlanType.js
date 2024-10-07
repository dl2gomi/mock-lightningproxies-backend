const mongoose = require('mongoose');

// Define the Plan type schema
const planTypeSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['unlimited', 'bandwidth'],
    },
    gigabyte: { type: Number, default: null }, // nullable
    speed: { type: Number, default: null }, // nullable
    time: { type: String, default: null }, // nullable
    price: { type: Number, default: 0 }, // double
  },
  {
    collection: 'plan_types',
    timestamps: true,
  }
);

// Create the PlanType model based on the schema
const PlanType = mongoose.model('PlanType', planTypeSchema);

module.exports = PlanType;
