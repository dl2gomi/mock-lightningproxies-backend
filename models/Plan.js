const mongoose = require('mongoose');

// Define the Plan schema
const planSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    typeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PlanType',
      required: true,
    },
    whitelist: { type: [String], default: null },
    expiresAt: { type: Date, default: Date.now, required: true },
    bandwidth: { type: Number, required: true },
  },
  {
    collection: 'plans',
    timestamps: true,
  }
);

// Create the Plan model based on the schema
const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
