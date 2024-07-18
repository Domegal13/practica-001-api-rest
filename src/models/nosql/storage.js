const mongoose = require("mongoose");

const StorageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    fileName: {
      type: String,
    },
  },
  {
    timestamps: true, //*TODO - createdAt, updatedAt
    versionKey: false,
  }
);

module.exports = mongoose.model("storages", StorageSchema);
