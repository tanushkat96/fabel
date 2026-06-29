const mongoose = require("mongoose");

const readingListSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },

    status: {
      type: String,
      enum: [
        "CURRENT",
        "WANT_TO_READ",
        "FINISHED",
        "FAVORITE",
      ],
      default: "WANT_TO_READ",
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    pagesRead: {
      type: Number,
      default: 0,
    },

    startedAt: Date,

    finishedAt: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ReadingList", readingListSchema);