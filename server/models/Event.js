const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: String,
  date: String,
  time: String,
  location: String,
  organizer: String,
  description: String,

  // Add this
  fee: {
    type: Number,
    required: true,
    default: 0,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Event", eventSchema);