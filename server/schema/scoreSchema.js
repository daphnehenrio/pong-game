// ? Import npm
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define a schema
const scoresSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
);

// ? Export
module.exports = mongoose.model('Scores', scoresSchema);
