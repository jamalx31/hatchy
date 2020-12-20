const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      // match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    displayName: {
      type: String,
    },
    username: {
      type: String,
    },
    photo: {
      type: String
    },
    twitterProvider: {
      type: {
        id: String,
        token: String,
      },
      select: false,
    },
  },
  { timestamps: {} }
);

// index ======================
userSchema.index({ email: "text" });

// methods ======================
userSchema.statics.upsertTwitterUser = function (
  token,
  tokenSecret,
  profile,
  cb
) {
  var that = this;
  // console.log({ profile });
  return this.findOne(
    {
      "twitterProvider.id": profile.id,
    },
    function (err, user) {
      // no user was found, lets create a new one
      if (!user) {
        var newUser = new that({
          email: profile.emails[0].value,
          photo: profile.photos[0].value,
          displayName: profile.displayName,
          username: profile.username,
          twitterProvider: {
            id: profile.id,
            token: token,
            tokenSecret: tokenSecret,
          },
        });

        newUser.save(function (error, savedUser) {
          if (error) {
            console.log(error);
          }
          return cb(error, savedUser);
        });
      } else {
        return cb(err, user);
      }
    }
  );
};

// create the model for users and expose it to our app
module.exports = mongoose.model("User", userSchema);
