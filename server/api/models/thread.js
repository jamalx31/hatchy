const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    tweets: {
      type: {},
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    timeToPost: {
      type: Date,
    } 
  },
  { timestamps: {} }
);

// index ======================
// userSchema.index({ email: "text" });

// methods ======================


// create the model for users and expose it to our app
module.exports = mongoose.model("Thread", userSchema);
