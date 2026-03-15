const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema(
  {
    repoId: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    ownerAvatar: {
      type: String,
    },
    description: {
      type: String,
      default: '',
    },
    stars: {
      type: Number,
      default: 0,
    },
    forks: {
      type: Number,
      default: 0,
    },
    language: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

module.exports = mongoose.model('Favorite', favoriteSchema);