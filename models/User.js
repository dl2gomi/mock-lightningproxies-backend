const mongoose = require('mongoose');

// Define the Profile sub-schema
const profileSchema = new mongoose.Schema(
  {
    balance: { type: Number, default: 0 },
  },
  { _id: false }
);

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true }, // unique index
    apikey: { type: String, requried: true, unique: true }, // unique index
    email: { type: String, required: true, unique: true }, // unique index
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    profile: profileSchema,
  },
  {
    collection: 'users',
    timestamps: true,
  }
);

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
