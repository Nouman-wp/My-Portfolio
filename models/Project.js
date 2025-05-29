const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  youtubeUrl: { type: String, required: true },
  images: [{ type: String }],  // Array to store image URLs
  liveLink: { type: String, required: true },
});

module.exports = mongoose.model('Project', projectSchema);
